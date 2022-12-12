---
title: "[프로그래머스] 키패드 누르기 -Javascript"
desc: '이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.'
date: 2022/04/02
category: Algorithm
---

## 키패드 누르기
### 문제 설명

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
![](https://media.vlpt.us/images/le12352/post/f2428d74-f8d1-4885-9bb5-a04c13c2c2ef/image.png)
이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

### 제한사항
- numbers 배열의 크기는 1 이상 1,000 이하입니다.
- numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
- hand는 "left" 또는 "right" 입니다.
- "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
- 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

### 입출력 예
|numbers|hand|result|
|---|----|---|
|[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]|"right"|"LRLLLRLLRRL"|
|[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]|"left"|"LRLLRRLLLRR"|
|[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]|"right"|"LLRLLRLLRL"|

### 풀이
```javascript
function solution(numbers, hand) {
    
    // 위치 찾아주는 함수
    function findKey(key) {
        let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (keypad[i][j] === key) {
                    return [i, j];
                }
            }
        }
    }
    
    var answer = '';
    let left = '*';
    let right = '#';
    for (let i of numbers) {
        if (i === 1 || i === 4 || i === 7) {
            answer += 'L';
            left = i;
        }else if (i === 3 || i === 6 || i === 9) {
            answer += 'R';
            right = i - 2;
        }else {
            let r = findKey(right);
            let l = findKey(left);
            let middle = findKey(i);
            // 손위치와 눌러야할 키패드 거리 구하기
            let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
            let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
            if (rr === ll) { // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
                hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L');
            }else if(rr > ll) { // 오른손의 거리가 더 멀다면
                answer += 'L';
                left = i;
            }else { // 왼손의 거리가 더 멀다면
                answer += 'R';
                right = i;
            }
        }
    }
    
    return answer;
}
```
1. 먼저 키패드의 위치를 찾아주는 findKey함수를 정의하고, 1, 4, 7은 왼손이 누르고 그 위치로 이동, 3, 6, 9는 오른손이 누르고 그 위치로 이동한다.

2. 가운데 2, 5, 8, 0의 경우 findKey함수를 통해 오른손과 왼손 그리고 가운데 버튼의 위치를 찾고 각각 오른손과 가운데 버튼의 거리, 왼손과 가운데 버튼의 거리를 구한다.

3. 거리가 같다면 오른손 잡이의 경우 오른손이, 왼손 잡이의 경우 왼손이 이동한다.

4. 오른손의 거리가 더 멀다면 왼손이, 왼손의 거리가 더 멀다면 오른손이 이동한다.

### 다른 사람의 풀이
```javascript
function solution(numbers, hand) {
    
    function dis(num, lH, rH, pos, hand){
        const lD = Math.abs(pos[lH][0] - pos[num][0]) + 
            Math.abs(pos[lH][1] - pos[num][1])
        const rD = Math.abs(pos[rH][0] - pos[num][0]) + 
            Math.abs(pos[rH][1] - pos[num][1])
        
        if (lD === rD) return hand === 'left' ?  'L' : 'R';
        return lD < rD ? 'L' : 'R'
    }
}

    const pos = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    var lH = '*', rH = '#';
    var result = ''
    for (var num of numbers){
        if (num % 3 === 1){
            result += 'L';
            lH = num;
        }
        
        else if (num !==0 && num % 3 === 0){
            result += 'R';
            rH = num;
        }
        else{
            result += dis(num, lH, rH, pos, hand)
            result[result.length-1] === 'L'? lH = num : rH = num
        }
    }

    return result;
}
```
### 코드 설명
1. pos라는 1 ~ #까지를 좌표화한 객체를 생성한다.
2. 현재 왼손과 오른손의 위치를 의미하는 lH, rH 변수를 각각 '*', '#'로 초기화한다.
3. numbers의 길이만큼 for문으로 반복한다.
1, 4, 7(num%3 === 1)일 경우에는 L을 더해주고 lH의 위치를 갱신해준다.
3, 6, 9(num%3 ===  0, 0은 제외)일 경우에는 R을 더해주고 rH의 위치를 갱신해준다.
이 두 경우가 아닐 경우 dis 함수를 이용해서 위치를 구한다.
4. dis 함수 설명:
매개변수로 누르려는 수, 왼손의 현 위치, 오른손의 현 위치, 좌표, 왼손/오른손잡이 여부를 받는다.
lD는 왼손 현 위치에서 목표점까지의 x축과 y축의 거리를 의미하고, rD는 오른손 현 위치에서 목표점까지의 x축과 y축의 거리를 의미한다.
만약 lD와 rD가 같다면 왼손잡이인지 오른손잡이인지 확인한다.
같지 않다면 D가 더 작은 손을 return한다.
5. return된 결과가 L이라면 lH를 현 위치로 갱신하고, R이라면 rH를 현 위치로 갱신한다.

## 느낀점
대부분의 다른 풀이들이 내 풀이와 비슷해서 놀랐다. 

"나름 잘 풀었구나"라는 생각이 들어서 뿌듯했다.

어려운 문제가 아니라고는 하는데 그래도 나에게 아직 시간이 좀 걸리는 문제였다.

그래도 손코딩하면서 풀면 어떤 문제든 풀 수 있겠다는 자신감이 생겼다.
