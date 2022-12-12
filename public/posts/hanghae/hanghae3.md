---
title: "[항해99] 3주차 Restful API, package.json에 대해"
desc: '3주차에 node.js, express를 활용하여 간단한 게시판을 구현하였다.
https://github.com/dongsun1/hanghaeblog.git
구현하는 과정에서 현업에서 강조하는 Restful API와 package.json에 대해서 공부했다.'
date: 2022/03/28
category: Hanghae99
---

3주차에 node.js, express를 활용하여 간단한 게시판을 구현하였다.
https://github.com/dongsun1/hanghaeblog.git

구현하는 과정에서 현업에서 강조하는 Restful API와 package.json에 대해서 공부했다.

## Restful API란?
"Repersentational State Transfer"의 약자로 자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다.
#
Restful API를 통해 요청이 수행될 때 Restful API는 리소스 상태에 대한 표현을 요청자에게 전송한다.
#
이 정보 또는 표현은 HTTP: JSON(Javascript Object Notation), HTML, XLT 또는 일반 텍스트를 통해 몇 가지 형식으로 전송된다.
#
JSON은 그 이름에도 불구하고 사용 언어와 상관이 없을 뿐 아니라 인간과 머신이 모두 읽을 수 있기 때문에 가장 널리 사용된다.

API가 Restful로 간주되려면 다음 기준을 따라야 한다.
- 클라이언트, 서버 및 리소스로 구성되었으며 요청이 HTTP를 통해 관리되는 클라이언트-서버 아키텍처
- 스테이트리스(stateless) 클라이언트-서버 커뮤니케이션: 요청 간에 클라이언트 정보가 저장되지 않으며, 각 요청이 분리되어 있고 서로 연결되어 있지 않는다
- 클라이언트-서버 상호 작용을 간소화하는 캐시 가능 데이터
- 정보가 표준 형식으로 전송되도록 하기 위한 구성 요소 간 통합 인터페이서, 여기에 필요한 것은 다음과 같다.
	- 요청된 리소스가 식별 가능하며 클라이언트에 전송된 표현과 분리되어야 한다.
    - 수신한 표현을 통해 클라이언트가 리소스를 조작할 수 있어야 한다(이렇게 할 수 있는 충분한 정보가 표현에 포함되어 있기 때문).
    - 클라이언트에 반환되는 자기 기술적(self-descriptive) 메시지에 클라이언트가 정보를 어떻게 처리해야 할지 설명하는 정보가 충분히 포함되어야 한다.
    - 하이퍼미디어: 클라이언트가 리소스에 액세스한 후 하이퍼링크를 사용해 현재 수행 가능한 기타 모든 작업을 찾을 수 있어야 한다.
- 요청된 정보를 검색하는 데 관련된 서버(보안, 로드 밸런싱 등을 담당)의 각 유형을 클라이언트가 볼 수 없는 계층 구조로 체계화하는 계층화된 시스템.
- 코드 온디맨드(선택 사항): 요청을 받으면 서버에서 클라이언트로 실행 가능한 코드를 전송하여 클라이언트 기능을 확장할 수 있는 기능.

이처럼 Rest API는 따라야 할 기준이 있지만, 속도를 저하시키고 더 무겁게 만드는 XML 메시징, 빌트인 보안 및 트랜잭션 컴플라이언스처럼 특정 요구 사항이 있는 SOAP(Simple Object Access Protocol) 등의 규정된 프로토콜보다 사용하기 쉬운 것으로 간주된다.
#
이와 대조적으로 REST는 필요에 따라 구현할 수 있는 일련의 지침으로, 이를 통해 Rest API는 더 빨라지고 경량화되며 사물인터넷(IoT) 및 모바일 앱 개발에 가장 적합한 API가 된다.

## package.json이란?
- package.json 파일은 배포한 모듈 정보를 담고자 만들어졌다.
- package.json 파일은 기본적으로 CommonJS의 명세를 충실히 따르고 있으며 JSON 형식의 파일이다.
- 직접 작성할 수도 있고 npm init 명령을 통해서 자동으로 생성할 수도 있다.
```javascript
{
	"name" : "test",
	"description" : "javascript's test programming.",
	"keywords" : ["util", "f", "server", "client", "browser"],
	"author" : "Goorm",
	"contributors" : [],
	"dependencies" : [],
	"repository" : {"type": "git", "url" : "git://gitbub.com/documentcloud/test.git" },
	"main" : "test.js",
	"version" : "1.1.6"
}
```
### name
- 프로젝트 이름으로, 가장 중요하다. 중앙 저장소에 배포할 때 version과 함께 필수 항목이다.
- url로 사용되고, 설치할 때 디렉토리 이름이 되기 때문에 url이나 디렉터리에서 쓸 수 없는 이름을 사용하면 안 된다.
- 또한, 이름에 node나 js가 들어가면 안 된다.
- name은 214자보다 짧아야 하며, 점(.)이나 밑줄(_)로 시작할 수 없다.
- 대문자를 포함해서는 안 되며, require() 함수의 인수로 사용되며 짧고 알기 쉬운 것으로 짓는 것이 좋다.
### version
- 프로젝트 버전을 정의힌다. 3단계 버전을 사용하며, - 로 태그 이름을 적을 수 있다.
### description
- 프로젝트 설명으로, 문자열로 기술한다.
- npm search로 검색된 리스트에 표시되기 때문에 사람들이 패키지를 찾아내고 이해하는 데 도움이 된다.
### keywords
- 프로젝트를 검색할 때 참조되는 키워드이다.
- description과 마찬가지로 npm search로 검색된 리스트에 표시된다.
### homepage
- 프로젝트 홈페이지 주소이다.
- url 항목과는 다르며, url을 설정하면 예상치 못한 움직임을 하게 되므로 주의한다.
### author
- 프로젝트 작성자 정보로, 한 사람만을 지정한다. JSON 형식으로 name, email, url 옵션을 포함한다.
### contributors
- 프로젝트에 참여한 공헌자 정보로, 여러 사람을 배열로 지정할 수 있다.
### repository
- 프로젝트의 소스 코드를 저장한 저장소의 정보이다.
- 소스 코드에 참여하고자 하는 사람들에게 도움이 될 수 있다. 프로젝트의 홈페이지 url을 명시해서는 안 된다.
### scripts
- 프로젝트에서 자주 실행해야 하는 명령어를 scripts로 작성해두면 npm 명령어로 실행 가능하다.
```javascript
"scripts": {"start": "node server.js"}
```
### config
- 소스 코드에서 config 필드에 있는 값을 환경 변수처럼 사용할 수 있다.
```javascripr
"name": "foo",
"config": {
    "port": "8080"
}
```
### private
- 이 값을 true로 작성하면 중앙 저장소로 저장하지 않는다.
#### dependencies
- 프로젝트 의존성 관리를 위한 부분이다. 이 프로젝트가 어떤 확장 모듈을 요구하는지 정리할 수 있다.
-일반적으로 package.json에서 가장 많은 정보가 입력되는 곳이다.
애플리케이션을 설치할 때 이 내용을 참조하여 필요한 확장 모듈을 자동으로 설치한다.
따라서 개발한 애플리케이션이 특정한 확장 모듈을 사용한다면 여기에 꼭 명시를 해주어야 한다.
- 또한, npm install 명령은 여기에 포함된 모든 확장 모듈들을 설치하게 되어 있다.
### devDependencies
- 개발할 때만 의존하는 확장 모듈을 관리한다.
### engine
- 실행 가능한 노드 버전의 범위를 결정한다.
