---
title: "[항해99] 10주차 실전프로젝트"
desc: '10주차에 준비완료 기능, 경찰, 의사, 기자 등등 다양한 직업을 추가하였다.
그리고 누군가 죽었을 때 게임이 끝났는지 안끝났는지 판단하는 코드도 추가하였다.'
date: 2022/05/15
category: Hanghae99
---

10주차에 준비완료 기능, 경찰, 의사, 기자 등등 다양한 직업을 추가하였다.

그리고 누군가 죽었을 때 게임이 끝났는지 안끝났는지 판단하는 코드도 추가하였다.


## 구현 코드
### 준비하기
```javascript
// 준비하기
socket.on("ready", async (ready) => {
    const { roomId, userId } = socket;

    if (ready) {
        await Room.updateOn(
            { roomId },
            { $push: { currentReadyPeople: userId } }
        );
    } else {
        await Room.updateOne(
            { roomId },
            { $pull: { currentReadyPeople: userId } }
        );
    }

    const { currentReadyPeople } = await Room.findOne({ roomId });
    io.to(roomId).emit("readyPeople", currentReadyPeople)
})
```

ready라는 인자에 true/false를 받아서 준비완료 및 준비해제를 한다.
Room의 currentReadyPeople이라는 배열에 준비한 사람을 push하거나 준비해제한 사람을 pull하여 준비된 사람의 배열만 프론트에 보내준다.

### 경찰
```javascript
// 경찰
if (clickerJob === "police") {
    const clickedUser = await Job.findOne({
        roomId,
        userId: clickedId,
    });

    socket.emit("police", userJob)
}
```

경찰이 클릭한 유저의 정보를 DB에서 가져온 후 경찰에게 클릭한 유저의 직업을 알려준다.

### 의사
```javascript
if (votes[i].clickerJob === "doctor") {
    const clickedUser = await Job.findOne({
        roomId,
        userId: votes[i].clickedId,
    });

    if (!clickedUser.save) {
        await Job.updateOne(
            { roomId, userId: votes[i].clickedId },
            { $set: { save: true } }
        );

        saved.push(votes[i].clickedId);
    }
}
```

의사가 클릭한 사람이 죽어있을 경우에만 살린다. 살린 사람은 saved라는 배열에 push한 뒤 프론트에 보내준다.

### 기자
```javascript
// 기자
if (votes[i].clickerJob === "reporter") {
    const { userId, userJob } = await Job.findOne({
        roomId,
        userId: votes[i].clickedId,
    });

    io.to(roomId).emit("reporter", {
        clickerId: userId,
        clickerJob: userJob,
    })
}
```

기자가 클릭한 사람의 직업과 아이디를 room에 보내준다.

## 느낀점
이번 주차에 중간발표회가 있었다. 
우리팀은 그래도 나름 잘했다고 생각한다. 

멘토님이 아주 기대가 된다고 꼭 프로젝트 완성해달라고 부탁해주셨다. 
#
CS관련 질문들을 많이 주셨는데 그 중 가장 중요한 질문은 소켓을 사용한다면 무조건 물어본다는 Polling/Long Polling이었다. 처음 들어 보았다.

Polling/Long Polling에 대해서 공부하고 포스팅해야겠다.