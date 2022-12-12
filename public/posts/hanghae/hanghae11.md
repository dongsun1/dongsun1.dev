---
title: "[항해99] 11주차 실전프로젝트"
desc: '11주차에 AI기능을 추가하였다. 아직 완벽한 테스트는 못해봤지만 좀만 더 다듬으면 될 것이라고 생각한다.
또한 요즘 많이 쓴다는 Nest.js를 적용시켜 보았다.
Nest.js는 기본적으로 TypeScript를 사용한다. 그래서 Nest.js를 공부할 겸 TypeScript에 대해서도 공부할 수 있었다.'
date: 2022/05/22
category: Hanghae99
---

11주차에 AI기능을 추가하였다. 아직 완벽한 테스트는 못해봤지만 좀만 더 다듬으면 될 것이라고 생각한다.

또한 요즘 많이 쓴다는 Nest.js를 적용시켜 보았다. 
#
Nest.js는 기본적으로 TypeScript를 사용한다. 그래서 Nest.js를 공부할 겸 TypeScript에 대해서도 공부할 수 있었다.

## 구현코드
### AI 생성
```javascript
// AI 생성
const { currentPeople, roomPeople } = room;

if (currentPeople.length < roomPeople.length) {
    const aiNum = currentPeople.length - roomPeople.length;

    for (let i = 0; i < aiNum; i++) {
        const ai = `AI${currentPeople.length + i};

        await this.roomModel.updateOne(
            { roomId },
            { $push: { currentPeople: ai, currentPeopleSocketId: ai } },
        );
    }
}
```

게임이 시작했을 때 방 인원보다 현재 인원이 적다면 나머지 인원들을 AI로 추가한다.

### AI 투표
```javascript
// AI 투표
const AI = await this.jobModel.find({ roomId, AI: true });

const { currentPeople, night } = room;

for (let i = 0; i < AI.length; i++) {
    const { roomId, userJob, userId } = AI[i]

    const random = Math.floor(
        Math.random() * (currentPeople.length - 1),
    );

    // 랜덤이 본인일 경우
    if (random === currentPeople.indexOf(`AI${random}`)) {
        i--;
    } else {
        const { save } = await this.jobModel.findOne({
            userId: currentPeople[random],
        });
        // 랜덤이 살아있을 경우 create
        if (save) {
            await this.voteModel.create({
                roomId,
                userSocketId: AI[i],
                clickerJob: userJob,
                clickerId: userId,
                clickedId: currentPeople[random],
                day : !night,
            });
        } else {
            i--;
        }
    }
}
```

생성된 AI는 랜덤으로 투표를 한다. 

랜덤으로 뽑은 사람이 본인일 경우 i--, 랜덤으로 뽑은 사람이 죽어있을 경우 i--를 해서 적절한 사람을 뽑을 때까지 for문을 돌린다.

## Nest.js
Nest.js는 노마드코더 무료강의를 듣고 공식문서를 참고하여 개발하였다.

테스트 코드도 열심히 하고 있지만, MockModel을 구현하는 방법을 찾는 중이다.

https://github.com/dongsun1/last-project-nest.git

## 느낀점
어려울 것이라고 생각했던 AI기능은 그래도 생각보다 쉽게 구현했다.

그리고 더 어려울 것이라고 생각했던 Nest.js, TypeScript 역시 생각보다 쉽게 구현했다.
#
이번 주차에 느낀점이라고 한다면 **쫄 필요가 없다**라는 것이다.

무엇이든 어려워 보이더라고 막상 처음부터 부딪히고 조금씩 파헤쳐 보다 보면 충분히 할 수 있다라는 것을 느꼈다.