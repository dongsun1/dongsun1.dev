---
title: "[항해99] 7주차 클론코딩"
desc: '7주차에 유투브를 클론코딩하는 프로젝트를 진행하였다.
https://github.com/doremilan/clone-project.git'
date: 2022/05/09
category: Hanghae99
---

7주차에 유투브를 클론코딩하는 프로젝트를 진행하였다.

https://github.com/doremilan/clone-project.git

## 구현기능
- 로그인/회원가입
- 검색
- 게시글 작성/수정/삭제/조회
- 좋아요/싫어요/구독
- 댓글 작성/수정/삭제
- 마이페이지

## AWS S3
이번 프로젝트에서 게시글 작성 시 이미지, 동영상을 AWS S3에 업로드 하는 것을 활용해 보았다.

![](https://velog.velcdn.com/images/le12352/post/e64f69ec-fec9-4a42-b0d9-42b2b9ec33f3/image.png)먼저 AWS S3에서 버킷 만들기를 클릭한다.

![](https://velog.velcdn.com/images/le12352/post/faf08dca-88d7-4bb4-a539-007a92e31dcf/image.png)버킷 이름을 작성하고 AWS 지역을 서울로 설정한다.

![](https://velog.velcdn.com/images/le12352/post/b8b2b8ca-aeac-4f17-babc-f11c28a05b14/image.png)모든 퍼블릭 액세스 차단을 해제한다. 현업에서는 이 부분을 어떻게 활용하는지는 모르겠지만 우리는 간단한 프로젝트를 하기 때문에 차단 해제를 하여도 상관없다고 생각한다.

![](https://velog.velcdn.com/images/le12352/post/a2fac7be-fed7-4cb3-b6c7-24af720e15d8/image.png)아래로 내려서 버킷 만들기를 누른다.

- upload.js
![](https://velog.velcdn.com/images/le12352/post/806e431e-3df8-4f60-86f6-3397f9d732e4/image.png)upload.js라는 미들웨어를 만든다. 동영상은 postVideo라는 이름으로, 이미지는 postThumb이라는 이름으로 받아서 S3에 업로드하는 미들웨어이다.

- posts.js
![](https://velog.velcdn.com/images/le12352/post/60539b0f-7f6d-4758-886c-1bb0bba2c0a2/image.png)라우터에서 postVideo, postThumb이라는 이름으로 받은 파일들을 업로드 미들웨어에 보내준다.

## Notion
클론프로젝트 노션 링크이다.

기획, api설계, schema설계가 있다.
#
저번주 미니프로젝트때보다 더 상세하게 작성하였다. 

어떻게 데이터를 주고 받아야 할지 좀 더 눈에 보였다.

https://www.notion.so/C-5-2076c702f90f428bac46807cab4f24e6

## 시연영상
https://www.youtube.com/watch?v=3GGshDiqZRU

## 느낀점
프론트엔드 2명 백엔드 3명으로 진행했었다.
#
상대적으로 프론트엔드가 해야할 작업이 많은데 숫자까지 더 적으니 백엔드는 남는 시간이 꽤 많았다. 

불행 중 다행인건 시간이 남을 때 코로나를 걸려서 그나마 다행이였다.. 
#
아무튼 이번 프로젝트에서 느낀 점은 S3를 활용해서 이미지, 동영상을 저장하고 가져올 수 있다는 것을 배웠다는 것에 뿌듯했다. 
#
그 전 프로젝트 할 당시에는 서버에 image라는 폴더를 만들고 그 폴더안에 이미지를 넣고 가져오는 식으로 구현하였는데 S3를 활용하니 서버에 이미지가 쌓이지 않고 S3 bucket안에 쌓이니 훨씬 보기 좋았다. 
#
앞으로도 S3를 활용해서 프로젝트를 진행할 것 같다.