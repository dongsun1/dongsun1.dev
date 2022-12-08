---
title: "[CS] Polling, Long Polling, Streaming"
desc: '실전프로젝트에서 Socket.io를 사용하였다.
Socket.io를 사용하면 프로젝트에서 무조건 물어본다는 질문이 바로 Polling, Long Polling, Streaming이라고 한다.
그래서 오늘 Polling, Long Polling, Streaming에 대해서 공부해보았다.'
date: 2022/06/01
category: CS
---

실전프로젝트에서 Socket.io를 사용하였다.

Socket.io를 사용하면 프로젝트에서 무조건 물어본다는 질문이 바로 Polling, Long Polling, Streaming이라고 한다.
#
그래서 오늘 Polling, Long Polling, Streaming에 대해서 공부해보았다.

먼저 http에 대해서 알아보자

## http
>http는 절대 양방향이 되지 않는다.

request, response형태로 단방향만 가능하다. 

>http는 서버에서 원하는 타이밍에 클라이언트에게 데이터를 보낼 수 없다.

Client만이 Server로 연락할 수 있고 Server는 Client의 요청을 응답하는것만 가능하다는 것이다.
#
과거에는 이래도 상관없었다. 그 과거가 꽤 많이 올라가야하긴 하다는 점이 문제.
#
요즘에는 둘의 통신이 매우 중요한 시기가 되었기 때문에 Server에서 반대로 클라이언트에 요청을 하고싶다는 생각을 하게 되었다.
#
하지만 http프로토콜은 원래부터 단방향으로 만들어졌기 때문에, http프로토콜을 뜯어 고치지 않는한 불가능하다.
#
그러나 http프로토콜은 웹에서 사용되는 표준 프로토콜이고 이를 이용해서 양방향을 사용해야하는 상황에 봉착하게됬다.
#
막말로 웹에서는 http말고는 방법이 없었다. 지금이야 웹소켓이 있었지만 과거 웹은 오직 http만 가능했다.
#
그래서 마치 통신하는 것처럼 느끼게 만드는 방법을 고안해냈다.
#
가장 초기모델이 바로 polling이라는 기법이다.
## Polling
![](https://velog.velcdn.com/images/le12352/post/696bebb3-1d43-4ed3-be08-84a89921c8b6/image.png)

>Polling방식은 가장 기본적인 데이터 처리 방식으로, 특정 주기를 가지고 서버에 http request를 하는 방식이다.

언제 통신이 발생할 지 예측이 불가능하기 때문에 클라이언트가 평범한 http request를 일정한 주기로 서버에 요청하여 이벤트 내용을 전달받는 방식이다.
#
가장 간단한 방법이지만 언제 통신이 발생할지 예측이 불가능하다는 점에서 클라이언트가 계속적으로 요청을 하기때문에 클라이언트가 많아지면 서버의 부담이 급증하게된다.
#
실시간 통신이라고 부르기는 하지만 실시간 정도의 빠른 응답을 기대하기는 어렵다.
#
그래서 실시간 느낌을 주기위해서 시간간격을 줄이면 어떻게 될까?
#
http통신이 매우많이 마구마구보내지게 될 것이다.
#
http는 단발성 통신이기에 header가 매우 무거운 프로토콜중 하나이다.
#
이 프로토콜이 마구마구 보내진다면 서버에 매우 무거운 부하를 주게된다.
#
그렇다고 다시 시간을 늘리자니 이하 문제가 무한반복하게 된다.
#
그래서 새로운 기법을 고안하게 되었다.
#
바로 http long polling기법이다.

## Long Polling
![](https://velog.velcdn.com/images/le12352/post/ade7dcaa-092e-49c3-ad3d-a5e0586b4aea/image.png)

>Long Polling방식은 Polling과 비슷한 방식이나 실시간으로 데이터를 처리할 수 있는 방식이다.

Long Polling은 클라이언트에서 서버로 일단 http request를 보내고 이 상태로 계속 기다리다가 서버에서 해당 클라이언트로 전달할 이벤트가 있다면 그 순간 response 메세지를 전달하며 연결이 종료된다. 
#
해당 작업이 완료된 이후에는 클라이언트에서 곧바로 다시 http request를 보내 서버의 다음 이벤트를 기다리게 되는 작업 방식이다.
#
일반 Polling과 비교했을때 Polling보다는 서버의 부담이 줄어든다는 장점이 있지만 클라이언트에게 동시에 많은 양의 메세지가 올 경우 Polling과 별 차이가 없게되며, 다수의 클라이언트에게 동시에 이벤트가 발생될 경우에는 곧바로 다수의 클라이언트가 서버로 접속을 시도하게 되면서 서버의 부담이 급증하게 된다.

## Streaming
![](https://velog.velcdn.com/images/le12352/post/558727d4-b0d6-45ae-8e65-f9eed0c32d6f/image.png)

>Streaming방식은 일반적인 TCP Connection과 비슷하며, 클라이언트와 서버간 연결 된 연결 통로로 데이터를 보내는 방식이다.

Streaming은 Long Polling과 마찬가지로 처음에는 클라이언트에서 서버로 http request를 보낸다.
#
서버에서 클라이언트로 이벤트를 전달할 때, 해당 요청을 끊지 않고 필요한 메세지만 보내기를 반복하는 방식이다. 서버에서 메세지를 보내고 나서 다시 http request연결을 하지 않아도 되어 Long Polling에 비해 부담이 덜 하다.

## 한계점과 해결책은?
세 가지 방법 모두 Http를 통해 통신하기 때문에 요청과 응답시 둘 다 Header가 불필요하게 크다는 단점이 있다.
#
또한 Long Polling과 Streaming 방식의 경우 서버에서 클라이언트로 메세지를 보낼수는 있지만 클라이언트에서 서버로 메세지를 보내는것에는 조금 어렵다는 문제점이 있다.
#
그래서 이렇게 약간의 문제가 있는 기술들 말고 정식으로 클라이언트와 서버간에 어려움 없이 양방향으로 통신이 가능하게 하기 위해서 HTML5 표준의 일부로 **Web Socket**이 만들어지게 되었다.

## Source
- https://velog.io/@hahan/Polling-Long-Polling-Streaming
- https://kamang-it.tistory.com/entry/Webhttp%ED%86%B5%EC%8B%A0%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%96%91%EB%B0%A9%ED%96%A5-%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B2%95-long-polling