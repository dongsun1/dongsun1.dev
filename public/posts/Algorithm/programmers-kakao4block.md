---
title: "[프로그래머스] [1차] 프렌즈4블록 - JavaScript"
desc: '블라인드 공채를 통과한 신입 사원 라이언은 신규 게임 개발 업무를 맡게 되었다. 이번에 출시할 게임 제목은 "프렌즈4블록".
같은 모양의 카카오프렌즈 블록이 2*2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임이다.'
date: 2022/12/23
category: Algorithm
---
## [1차] 프렌즈4블록
### 문제 설명
블라인드 공채를 통과한 신입 사원 라이언은 신규 게임 개발 업무를 맡게 되었다. 이번에 출시할 게임 제목은 "프렌즈4블록".
같은 모양의 카카오프렌즈 블록이 2*2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임이다.

![img1](http://t1.kakaocdn.net/welcome2018/pang1.png)

만약 판이 위와 같이 주어질 경우, 라이언이 2×2로 배치된 7개 블록과 콘이 2×2로 배치된 4개 블록이 지워진다. 같은 블록은 여러 2×2에 포함될 수 있으며, 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.

![img2](http://t1.kakaocdn.net/welcome2018/pang2.png)

블록이 지워진 후에 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게 된다.

![img3](http://t1.kakaocdn.net/welcome2018/pang3.png)

만약 빈 공간을 채운 후에 다시 2×2 형태로 같은 모양의 블록이 모이면 다시 지워지고 떨어지고를 반복하게 된다.

![img4](http://t1.kakaocdn.net/welcome2018/pang4.png)

위 초기 배치를 문자로 표시하면 아래와 같다.

```javascript
TTTANT  
RRFACC  
RRRFCC  
TRRRAA  
TTMMMF  
TMMTTJ
```

각 문자는 라이언(R), 무지(M), 어피치(A), 프로도(F), 네오(N), 튜브(T), 제이지(J), 콘(C)을 의미한다
#
입력으로 블록의 첫 배치가 주어졌을 때, 지워지는 블록은 모두 몇 개인지 판단하는 프로그램을 제작하라.

### 입력 형식
- 입력으로 판의 높이 m, 폭 n과 판의 배치 정보 board가 들어온다.
- 2 ≦ n, m ≦ 30
- board는 길이 n인 문자열 m개의 배열로 주어진다. 블록을 나타내는 문자는 대문자 A에서 Z가 사용된다.

### 출력 형식
입력으로 주어진 판 정보를 가지고 몇 개의 블록이 지워질지 출력하라.

### 입출력 예제

|m|	n|	board|	answer|
|---|---|---|---|
|4|	5|["CCBDE", "AAADE", "AAABF", "CCBBF"]|	14|
|6	|6|	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]	|15|

### 문제풀이
```javascript
function solution(m, n, board) {
  var answer = 0;

  // board를 2차원 배열로 만들어준다.
  board = board.map(o => o.split(''))

  // board 크기만큼 map을 세팅한다. 기본값 => false
  const map = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map.set(`${i} ${j}`, false)
    }
  }

  while (true) {
    // 삭제한 것이 있는지 확인하는 변수
    let check = true

    // temp Map을 만든다.
    // while문을 돌 때마다 초기화 된 Map을 사용하기 위함
    const temp = new Map(map)

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] === 0) continue
        // i, j 기준으로 오른쪽, 아래, 대각선 아래가 모두 같다면
        if (board[i][j] === board[i][j + 1] && board[i][j + 1] === board[i + 1][j] && board[i + 1][j] === board[i + 1][j + 1]) {
          // 4개를 지우기 때문에 4를 더해준다.
          answer += 4

          // 지워졌던 것이라면 1을 빼준다.
          if (temp.get(`${i} ${j}`)) answer--
          if (temp.get(`${i} ${j + 1}`)) answer--
          if (temp.get(`${i + 1} ${j}`)) answer--
          if (temp.get(`${i + 1} ${j + 1}`)) answer--

          // 지운 것을 true로 set 해준다.
          temp.set(`${i} ${j}`, true)
          temp.set(`${i} ${j + 1}`, true)
          temp.set(`${i + 1} ${j}`, true)
          temp.set(`${i + 1} ${j + 1}`, true)

          // 삭제한 것이 있으니 false
          check = false
        }
      }
    }

    // 삭제한 것이 없다면 break
    if (check) break

    // 삭제한 위치에 0으로 초기화
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (temp.get(`${i} ${j}`)) board[i][j] = 0
      }
    }
    // ex)
    // T,T,T,A,N,T
    // 0,0,F,A,0,0
    // 0,0,0,F,0,0
    // T,0,0,R,A,A
    // T,T,M,M,M,F
    // T,M,M,T,T,J

    // 0이라면 한칸씩 내리기
    for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          for (let k = i - 1; k >= 0; k--) {
            board[k + 1][j] = board[k][j]
            board[k][j] = 0
          }
        }
      }
    }

    // ex)
    // 0,0,0,A,0,0
    // 0,0,0,A,0,0
    // T,0,T,F,N,T
    // T,T,F,R,A,A
    // T,T,M,M,M,F
    // T,M,M,T,T,J
  }

  return answer;
}
```

1. 먼저 board를 2차원 배열로 만든다.
2. Map을 만드는데 i, j의 키에 false를 넣어준다.
3. i, j 기준으로 0이 아니고 오른쪽, 아래, 대각선 아래가 모두 같다면 answer에 지운 개수를 더해준다.
4. temp Map을 확인하면서 지운 곳에는 board에 0으로 초기화해준다.
5. 이번엔 board를 돌면서 0이라면 한칸씩 내린다.
6. 삭제한 것이 없을 때까지 반복한다.

## 느낀점
프로그래머스 기준 Level 2이다.

Level 2라고 하기엔 카카오 해설을 보면 난이도 상이라고 적혀있다.. 정답률은 48%라고 한다.

알고리즘 개념을 묻는다기보단 빡센 구현문제였다고 생각한다. 푸는데 1시간 넘게 걸렸다.
#
주석까지 달다보니 코드가 많이 길어졌다. 근데 다른 분들이 푼 코드를 봐도 길었다.

나는 구현문제는 자신있지만 알고리즘 개념을 알아야하는 문제는 잘 못하는 것 같다.

여러 문제를 풀면서 계속 공부해야겠다.. (물론 구현문제가 더 재밌다!)