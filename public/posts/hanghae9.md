---
title: "[항해99] 9주차 실전프로젝트"
desc: '9주차에 Socket.io를 활용해서 게임을 진행해보았다.
게임시작부터 채팅, 직업 랜덤 부여, 낮 투표, 밤 살인 등등 여러가지 기능을 구현했다.
처음에는 Socket.io와 API를 섞어서 사용하려 하였지만 결국 Socket.io로 통일하여 사용하기로 하였다.
각 유저마다 요청하는 것도 다르고 응답하는 것도 다르기 때문에 통일하는게 더 좋을 것 같다고 판단했다.'
date: 2022/05/14
category: Hanghae99
---

9주차에 Socket.io를 활용해서 게임을 진행해보았다.

게임시작부터 채팅, 직업 랜덤 부여, 낮 투표, 밤 살인 등등 여러가지 기능을 구현했다.
#
처음에는 Socket.io와 API를 섞어서 사용하려 하였지만 결국 Socket.io로 통일하여 사용하기로 하였다.

각 유저마다 요청하는 것도 다르고 응답하는 것도 다르기 때문에 통일하는게 더 좋을 것 같다고 판단했다.

## 구현 코드
### 채팅
```javascript
// 채팅
socket.on("msg", async (msg) => {
    const roomId = socket.roomId;
    const { night } = await Room.findOne({ roomId });

    if (night) {
        // 밤 마피아 채팅
        const userJob = "mafia";
        const mafia = await Job.find({ roomId, userJob });
        for (let i = 0; i < mafia.length; i++) {
            io.to(mafia[i].userSocketId).emit("msg", { msg, id: socket.userId });
        }
    } else {
        // 낮 채팅
        io.to(socket.roomId).emit("msg", { msg, id: socket.userId });
    }
})
```

night라는 변수에 방 정보를 담아서 밤인지 낮인지 판단 후 밤이라면 마피아끼리만 채팅하고, 낮이라면 모두가 채팅하도록 구현하였다.

### 방만들기
```javascript
// 방만들기
socket.on("createRoom", async (data) => {
    const { roomTitle, roomPeople, roomPwd } = data;

    const maxNumber = await Room.findOne().sort("-roomId");

    let number = 1;
    if (maxNumber) {
        number = maxNumber.roomId + 1
    }

    const room = await Room.create({
        roomId: number,
        userId: socket.userId,
        roomTitle,
        roomPeople,
        password: roomPwd,
    });

    socket.emit("roomData", room);
})
```

방 만들기는 간단하게 제목, 인원, 비밀번호를 받아서 DB에 추가하였다.

### 직업 랜덤 부여
```javascript
// 각 user 직업 부여
const job = [];
// 1:citizen, 2:doctor, 3:police, 4:mafia, 5:reporter, 6:sniper
switch (userArr.length) {
    case 4:
        job.push(1, 2, 3, 4);
        break;
    case 5:
        job.push(1, 1, 1, 2, 4);
        break;
    case 6:
        job.push(1, 1, 1, 2, 3, 4);
        break;
    case 7:
        job.push(1, 1, 1, 2, 3, 4, 4);
        break;
    case 8:
        job.push(1, 1, 1, 2, 3, 4, 4, 5);
        break;
    case 9:
        job.push(1, 1, 1, 1, 2, 3, 4, 4, 5);
        break;
    case 10:
        job.push(1, 1, 1, 1, 2, 3, 4, 4, 5, 6);
        break;
    default:
        break;
}

// job random 부여
const jobArr = job.sort(() => Math.random() - 0.5);
const playerJob = [];

for (let i = 0; i < jobArr.length; i++) {
    switch (jobArr[i]) {
        case 1:
            playerJob.push("citizen");
            break;
        case 2:
            playerJob.push("doctor")
            break;
        case 3:
            playerJob.push("police")
            break;
        case 4:
            playerJob.push("mafia")
            break;
        case 5:
            playerJob.push("reporter")
            break;
        case 6:
            playerJob.push("sniper")
            break;
        default:
            break;
    }
}
```

직업마다 번호를 매기고 job배열에 push한 뒤 job배열을 랜덤으로 섞는다.
섞은 job배열을 case에 맞게 playerJob배열에 push한다.

## 느낀점
처음 Socket.io을 사용해서 개발을 해봤다. 어디서부터 시작해야할지 막막했지만 당장 코드를 쳐보자! 라고 생각을 하면서 시작했다. 
#
수많은 시행착오를 겪으면서 어느정도 Socket.io 사용법을 익힌 것 같다.

나와 같이 테스트하던 프론트엔드 팀원도 정말 고생했다.
#
그래도 처음 써보는 기술 + 처음 해보는 게임 개발이라는 점에서 이 정도 개발을 했다는 것에 충분히 만족하고 있다.
#
앞으로 더 추가적으로 직업, AI 등등 추가적으로 개발해야될 것이 많다.
더 노력해서 기간안에 꼭 완성할 것이다.


