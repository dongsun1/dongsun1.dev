---
title: "[항해99] 12주차 실전프로젝트"
desc: '12주차에 AI 기능 마무리, Express.js -> Nest.js 변환 및 테스트 코드 작성을 하였고,
TypeScript와 Nest.js에 대해서 더 공부하였다.
이제 개발은 거의 다 마무리가 되었고 유저 피드백 수용 및 발표 준비가 남았다.'
date: 2022/05/31
category: Hanghae99
---

12주차에 AI 기능 마무리, Express.js -> Nest.js 변환 및 테스트 코드 작성을 하였고,

TypeScript와 Nest.js에 대해서 더 공부하였다.

이제 개발은 거의 다 마무리가 되었고 유저 피드백 수용 및 발표 준비가 남았다.

## TypeSript를 사용하는 이유
1. 버그 예방
    - 자바스크립트의 버그 중 15%를 타입스크립트의 사용으로 미리 예방할 수 있다는 연구가 있을 정도로 미리 타입을 지정하는 것만으로 많은 버그를 예방할 수 있다.

2. 크로스브라우징(브라우저 호환성) 문제 해결
    - 타입스크립트는 컴파일 과정에서 ES6+ 문법들을 ES5(또는 ES3)로 바꿔주기 때문에 Babel에 도움 없이 크로스브라우징 문제를 해결할 수 있다.
    

3. 현업에서 많이 사용하는 언어
    - 기술 멘토링 당시 요즘 TypeScript를 안쓰는 기업은 별로 없다는 말과 함께 꼭 공부를 해봤으면 좋겠다는 말을 들었다.
    - 신입이지만 조금이라도 더 빠르게 기업에 스며들기 위해 사용하였다.

## Nest.js를 사용하는 이유
1. 사용하기가 쉽다
    - Express.js는 프로젝트 시작 전 설치할 라이브러리가 너무 많을 뿐만 아니라 폴더를 하나씩 하나씩 생성해야 한다는 점이 비효율적이다.
    - Nest.js는 cli를 전역적으로 설치 후 nest라는 명령어를 통해 프로젝트를 만들거나 서비스, 모듈 파일 및 테스트 파일을 생성해줌으로써 간편하게 프로젝트를 사전에 설정할 수 있다.

2. 아키텍처가 정의되어 있다.
    - Nest.js는 아키텍처가 정의되어 있어 여러 개발자들 간에 협업하기에도 좋으며 이는 대규모 엔터프라이즈 애플리케이션을 개발을 할 때 더 효율적으로 적용된다.

## 트러블 슈팅

- 문제 발생
Nest.js에서 service 테스트 코드 작성 시 데이터베이스 연동이 안되는 문제가 발생하였다.

- 문제점 파악
회원가입을 해도 유저가 데이터베이스에 Create 되지 않아서 로그인이 안되어 테스트를 할 수가 없었다.

- 문제 해결
mongodb-memory-server 라이브러리를 사용하여 테스트 데이터베이스 모듈을 만들어서 테스트 진행 시 임의의 데이터베이스를 만들고 테스트 종료 시 삭제하는 방식으로 해결하였다.

### test-database.module.ts
```javascript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongo;

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
            imports: [],
            useFactory: async () => {
                mongo = await MongoMemoryServer.create();
                const uri = await mongo.getUri();
                return { uri };
            },
        }),
    ],
})

export class TestDocumentDatabaseModule {}

export const closeInMongodbConnection = async () => {
    if (mongo) await mongo.stop();
};
```

## 테스트 결과
![](https://velog.velcdn.com/images/le12352/post/d4c5865d-eb38-4db9-87c0-ee47ec521a67/image.png)
Funcs부분에서 100점을 받았다.

## 느낀점
위에서 말한 트러블을 해결하기 위해 많은 시간을 썼다. 

물어볼 사람도 없어서 오직 구글링만으로 해결하였고 Nest.js가 생각보다 커뮤니티가 활발하지 않아서 더 힘들었다.

그래도 이 문제를 해결했을 때의 뿌듯함은 이루 말할 수 없다.
