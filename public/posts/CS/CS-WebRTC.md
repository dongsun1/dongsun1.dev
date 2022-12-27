---
title: "[CS] WebRTC, STUN서버, TURN서버"
desc: 'WebRTC란 웹 브라우저간에 플러그인의 도움 없이 서로 통신할 수 있도록 설계된 API를 말한다. 대표적으로 사용하는 회사는 Discord가 있다.'
date: 2022/06/16
category: CS
---

오늘은 WebRTC, STUN서버, TURN서버에 대해서 포스팅하겠다.

## WebRTC
WebRTC란 웹 브라우저간에 플러그인의 도움 없이 서로 통신할 수 있도록 설계된 API를 말한다. 대표적으로 사용하는 회사는 Discord가 있다.

![](https://velog.velcdn.com/images/le12352/post/e265109c-0c30-46ef-91f3-48fbba23f642/image.png)
일반적인 통신은 이런 식으로 서버를 거쳐서 클라이언트에 전송하는 방식을 사용한다.

하지만 WebRTC의 기본적인 통신과정은 다음과 같다.
![](https://velog.velcdn.com/images/le12352/post/ab1bba02-f2d9-432e-8a33-1abe5c6e1bc4/image.png)
![](https://velog.velcdn.com/images/le12352/post/e24d1cfd-2689-4787-8c71-4852e006944a/image.png)
![](https://velog.velcdn.com/images/le12352/post/efb56038-679c-414a-b4bf-2dd448e04f33/image.png)
대략 이런 식으로 작동한다. 본래 첫 태생 자체는 P2P를 위한 통신방식이다.
#
그러나 아무래도 WebSocket을 이용하기 때문에 직접적으로 IP를 연결하는 방식을 차용하여 방화벽이 존재하거나 허브를(또는 라우터를) 사용하는 NAT환경에서는 연결이 불가능하다. 
#
NAT환경이란 간단하게 말하자면 Wifi 환경과 같이 퍼블릭 IP가 따로 존재하고 공유기 내부에는 Private IP를 이용하여 구분할 때, 공유기에서 Public IP를 Private IP로 매핑시켜주는 환경을 말한다.
#
시그널링을 위해서는 방화벽을 통과시켜주거나 Private IP를 Public IP로 바꿔주는 STUN서버나 TURN서버를 사용해야 한다.

## STUN서버
STUN 은 Session Traversal Uilities for NAT의 약자이다.
#
NAT환경에서는 Private IP를 별도로 가지고 있기 때문에 Peer to Peer(이하 P2P) 통신이 불가능 하다. 따라서 클라이언트는 자신의 Public IP를 확인하기 위해 STUN 서버로 요청을 보내고 서버로부터 자신의 Public IP를 받는다.
#
그래서 이때부터 클라이언트는 자신이 받은 Public IP를 이용하여 시그널링을 할때 받은 그 정보를 이용해서 시그널링을 하게 한다.
#
다만 이 STUN으로 모든걸 해결할 수는 없는데 바로 두 Client가 같은 네트워크에 존재하고 있을때는 이것으로는 해결이 되지 않는다.
#
또한, NAT 환경에서는 Symmetric NAT의 경우는 어플리케이션이 달라지면 NAT의 매핑테이블이 바뀔 수 있기 때문이다.

## TURN서버
TURN 서버는 클라이언트들이 통신할 때 Public 망에 존재하는 TURN 서버를 경유하여 통신하게 된다.
#
클라이언트는 자신의 Private IP가 포함된 TURN 메세지를 턴서버로 보낸다. 
#
그러면 TURN 서버는 메세지에 포함된 Network Layer IP 주소와 Transport Layer의 UDP 포트 넘버와의 차이를 확인하고 클라이언트의 Public IP로 응답하게 된다. 
#
이때 NAT는 NAT 매핑테이블에 기록되어 있는 정보에 따라서 내부 네트워크에 있는 클라이언트의 Private IP 로 메세지를 전송한다.

## STUN서버와 TURN서버의 차이
TURN서버는 STUN서버의 개념을 포함하고 있는 Super Set이며 STUN서버 처럼 단순히 라우팅 테이블을 통해서 Private ip와 Public ip를 연결하는데에서 그치지 않는다.
#
WebRTC를 예로 들면 미디어 데이터를 1:1로 보내준다고 했을때 그 모든 데이터는 TURN 서버를 Relay 서버로 하여 데이터를 원하는 Peer에게 전달해주게 된다.
#
하지만, 만약 1:N 통신으로 스트리밍하는 서비스라면 중간에 Media 서버를 두어 중계하지 않으면 모든 Peer가 매쉬 구조로 연결되게 되어 각 Peer에 엄청난 부담을 주게 되고 네트워크 자원도 너무 많이 사용하게 된다.
#
이런 서비스에서는 TURN 서버는 단순히 STUN서버의 역할을 할 가능성이 크다.
#
왜냐하면 Client와 Media 서버가 서로 Peer관계를 맺어 단순 송신 혹은 수신을 하게 됨으로 TURN서버를 Relay 서버로 하여 거칠 이유가 없기 때문이다.

## Source
- https://andonekwon.tistory.com/53?category=447798
- https://andonekwon.tistory.com/59?category=447798