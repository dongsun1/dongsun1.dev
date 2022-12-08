---
title: "[항해99] 5주차 CORS"
desc: '5주차에 test코드가 얼마나 중요한지에 대해 배우고 test코드를 구현해보았다.
https://github.com/dongsun1/abstract-site
https://github.com/dongsun1/abstract-sensor
배우는 과정에서 CORS라는 개념에 대해 공부하였다.'
date: 2022/04/13
category: Hanghae99
---

5주차에 test코드가 얼마나 중요한지에 대해 배우고 test코드를 구현해보았다.
https://github.com/dongsun1/abstract-site

https://github.com/dongsun1/abstract-sensor

배우는 과정에서 CORS라는 개념에 대해 공부하였다.

## CORS란?
브라우저에서는 보안적인 이유로 cross-origin HTTP 요청들을 제한한다.
#
그래서 cross-origin 요청을 하려면 서버의 동의가 필요하다. 
#
만약 서버가 동의한다면 브라우저에서는 요청을 허락하고, 동의하지 않는다면 브라우저에서 거절한다.
#
이러한 허락을 구하고 거절하는 메커니즘을 HTTP-header를 이용해서 가능한데, 이를 CORS(Cross-Origin Resouce Sharing)라고 부른다.
#
그래서 브라우저에서 cross-origin 요청을 안전하게 할 수 있도록 하는 메커니즘이다.

cross-origin이란 다음 중 한 가지라도 다른 경우를 말한다.
1. 프로토콜 - http와 https는 프로토콜이 다르다.
2. 도메인 - domain.com과 otehr-domain.com은 다르다.
3. 포트 번호 - 8080포트와 3000포트는 다르다.

## CORS는 왜 필요한가?
CORS가 없이 모든 곳에서 데이터를 요청할 수 있게 되면, 다른 사이트에서 원래 사이트를 흉내낼 수 있게 된다.
#
예를 들어서 기존 사이트와 완전히 동일하게 동작하도록 하여 사용자가 로그인을 하도록 만들고, 로그인했던 세션을 탈취하여 악의적으로 정보를 추출하거나 다른 사람의 정보를 입력하는 등 공격을 할 수 있다.
#
이렇게 공격을 할 수 없도록 브라우저에서 보호하고, 필요한 경우에만 서버와 협의하여 요청할 수 있도록 하기 위해서 필요하다.

## CORS 동작 원리
기본적으로 웹 클라이언트 어플리케이션이 다른 출처의 리소스를 요청할 때는 HTTP 프로토콜을 사용하여 요청을 보내게 되는데, 이때 브라우저는 요청 헤더에 Origin이라는 필드에 요청을 보내는 출처를 함께 담아보낸다.
#
`Origin: https://velog.io`
이후 서버가 이 요청에 대한 응답을 할 때 응답 헤더의 Access-Control-Allow-Origin 이라는 값에 "이 리소스를 접근하는 것이 허용된 출처"를 내려주고, 이후 응답을 받은 브라우저는 자신이 보냈던 요청의 Origin과 서버가 보내준 응답의 Access-Control-Allow-Origin을 비교해본 후 이 응답이 유효한 응답인지 아닌지를 결정한다.
#
기본적이 흐름은 이렇게 간단하지만, 사실 CORS가 동작하는 방식은 한 가지가 아니라 세 가지의 시나리오에 따라 변경되기 때문에 여러분의 요청이 어떤 시나리오에 해당되는지 잘 파악한다면 CORS 정책 위반으로 인한 에러를 고치는 것이 한결 쉬울 것이다.

### Simple Request
단순 요청은 서버에 API를 요청하고, 서버는 Access-Control-Allow-Origin 헤더를 포한한 응답을 브라우저에 보낸다. 브라우저는 Access-Control-Allow-Origin 헤더를 확인해서 CORS 동작을 수행할지 판단한다.
![](https://velog.velcdn.com/images/le12352/post/9356b024-5c93-4aec-a160-e296698f312a/image.png)
### Simple Request 조건
아무 때나 단순 요청을 사용할 수 있는 것은 아니고, 특정 조건을 만족하는 경우에만 예비 요청을 생략할 수 있다. 게다가 이 조건이 조금 까다롭기 때문에 일반적인 방법으로 웹 어플리케이션 아키텍처를 설계하게 되면 거의 충족시키기 어려운 조건들이다.

- 요청의 메소드는 GET, HEAD, POST 중 하나여야 한다.
- Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width를 제외한 헤더를 사용하면 안된다.
- 만약 Content-Type를 사용하는 경우에는 application/x-www-form-urlencoded, multipart/form-data, text/plain만 허용된다.

사실 1번 조건의 경우는 그냥 PUT이나 DELETE 같은 메소드를 사용하지 않으면 되는 것 뿐이니 그렇게 보기 드문 상황은 아니지만, 2번이나 3번 조건 같은 경우는 조금 까다롭다.
#
애초에 조건에 명시된 헤더들은 정말 기본적인 헤더들이기 때문에, 복잡한 상용 웹 어플리케이션에서 이 헤더들 외에 추가적인 헤더를 사용하지 않는 경우는 거의 없고, 당장 사용자 인증에 사용되는 Authorization 헤더 조차 조건에는 포함되지 않는다.
#
3번 조건은 많은 REST API들이 Content-Type으로 application/json을 사용하기 때문에 지켜지기 어려운 조건이다.

### Preflight request
프리플라이트(Preflight) 방식은 서버에 예비 요청을 보내서 안전한지 판단한 후 본 요청을 보내는 방법이다. 브라우저는 요청을 한번에 보내지 않고 예비 요청과 본 요청으로 나누어서 서버로 전송한다.
#
이때 브라우저가 본 요청을 보내기 전에 보내는 예비 요청을 Preflight라고 부르는 것이며, 이 예비 요청에는 HTTP 메소드 중 OPTIONS 메소드가 사용된다. 예비 요청의 역할은 본 요청을 보내기 전에 브라우저 스스로 이 요청을 보내는 것이 안전한지 확인하는 것이다.
![](https://velog.velcdn.com/images/le12352/post/e96bea48-949c-43dd-9b3d-dcbd85ff0414/image.png)
우리가 자바스크립트의 fetch API를 사용하여 브라우저에게 리소스를 받아오라는 명령을 내리면 브라우저는 서버에게 예비 요청을 먼저 보내고, 서버는 이 예비 요청에 대한 응답으로 현재 자신이 어떤 것들을 허용하고, 어떤 것들을 금지하고 있는지에 대한 정보를 응답 헤더에 담아서 브라우저에게 다시 보내주게 된다.
#
이후 브라우저는 자신이 보낸 예비 요청과 서버가 응답에 담아준 허용 정책을 비교한 후, 이 요청을 보내는 것이 안전하다고 판단되면 같은 엔드포인트로 다시 본 요청을 보내게 된다. 

이후 서버가 이 본 요청에 대한 응답을 하면 브라우저는 최종적으로 이 응답 데이터를 자바스크립트에게 넘겨준다.

### Credentialed Request
3번째 시나리오는 인증된 요청을 사용하는 방법이다. 
#
이 시나리오는 CORS의 기본적인 방식이라기 보다는 다른 출처 간 통신에서 좀 더 보안을 강화하고 싶을 때 사용하는 방법이다.
#
기본적으로 브라우저가 제공하는 비동기 리소스 요청 API인 XMLHttpRequest 객체나 fetch API는 별도의 옵션 없이 브라우저의 쿠키 정보나 인증과 관련된 헤더를 함부로 요청에 담지 않는다.
#
이때 요청에 인증과 관련된 정보를 담을 수 있게 해주는 옵션이 바로 credentials 옵션이다.
#
이 옵션에는 총 3가지의 값을 사용할 수 있으며, 각 값들이 가지는 의미는 다음과 같다.

|옵션 값|설명|
|-|-|
|same-origin (기본값)|	같은 출처 간 요청에만 인증 정보를 담을 수 있다|
|include|	모든 요청에 인증 정보를 담을 수 있다|
|omit|	모든 요청에 인증 정보를 담지 않는다|

same-origin 은 기본 값으로, 같은 출처 간에 쿠키 등의 인증 정보 전달이 가능하다. include 는 출처에 상관없이 모든 요청에 쿠키 등의 인증 정보를 전달할 수 있다. omit 은 쿠키 등의 인증 정보를 전달하지 않는다.
#
만약 same-origin이나 include 와 같은 옵션을 사용하여 리소스 요청에 인증 정보가 포함된다면, 이제 브라우저는 다른 출처의 리소스를 요청할 때 단순히 Access-Control-Allow-Origin 만 확인하는 것이 아니라 좀 더 빡빡한 검사 조건을 추가하게 된다.

### Node.js에서 CORS 에러 해결 방법
1. res.header에 "Access-Control-Allow-Origin"을 명시적으로 사용한다.
- localhost:8081 정보를 허용하는 것을 명시적으로 입력하였다.
[보안주의] "*"를 사용하는 경우 모든 Host를 허용하게 된다.
```javascript
const app = express();
 
app.all('/*', function(req, res, next) {
 
  logger.debug("Access-Control-Allow-Origin~~~~~~");
 
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
 
  // res.header("Access-Control-Allow-Origin", "*");
 
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
 
  next();
 
});
 
// 위코드 아래에 REST api router 를 선언해야 된다.
 
app.use('/xxxx/test/v1', router_xxxxx);
```

2. 다중 host 추가 방법
위 방법은 단일 Host만 가능하다.
REST API를 여러곳에서 사용하기 위하여는 다른 방법이 필요하여 다시 검색.
아래 방벙으로 동작 상태를 확인하였다.
```javascript
app.all('/*', function(req, res, next) {
 
  logger.debug("Access-Control-Allow-Origin~~~~~~");
 
  const allowedOrigins = ['http://localhost:8081', 'http://test11111:8082']; // CORS 허용할 도메인 목록 
  const origin = req.headers.origin; 
 
  res.setHeader('Content-Type', 'application/json; charset="utf-8"'); // CORS 허용 
 
  if(allowedOrigins.indexOf(origin) > -1) { // 
    res.setHeader('Access-Control-Allow-Origin', origin); 
  } 
 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 
  res.setHeader('Access-Control-Max-Age', '3600'); 
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 
  next();
 
});
```
Method 허용하려는 것을 여러개 넣고,
max-age: 다른 preflight request를 보내지 않고, preflight request에 대한 응답을 캐시할 수 있는 시간(초)을 제공한다.
#
위의 코드는 86400초(24시간)이다. 각 브라우저의 최대 캐싱시간은 Access-Control-Max-Age가 클수록 우선순위가 높다.

## Source
https://hannut91.github.io/blogs/infra/cors
https://velog.io/@hoo00nn/CORSCross-Origin-Resource-Sharing-%EB%9E%80
https://iam777.tistory.com/564