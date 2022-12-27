---
title: "[프로그래머스] 올바른 괄호 - JavaScript"
desc: "괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
- '()()' 또는 '(())()' 는 올바른 괄호입니다.
- ')()(' 또는 '(()(' 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요."
date: 2022/10/22
category: Algorithm
---
## 올바른 괄호
### 문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

### 제한사항
- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

### 입출력 예제
|s|answer|
| - | - |
|"()()"|true|
|"(())()"|true|
|")()("|false|
|"(()("|false|

### 문제풀이
```js
function solution(s){
    var answer = true;
    s = s.split('')
    let check = 0
    while (s[0]) {
        if (s[0] === '(') {
            check++
            s.shift()
        } else {
            if (check === 0) {
                answer = false
                break
            }
            for (let i = 0; i < check; i++) {
                if (!!s[0] && s[0] === ')') s.shift()
                else answer = false
            }
            check = 0
        }
    }

    return answer;
}
```
처음엔 다소 복잡하게 풀었다. 테스트 문제는 다 맞췄지만 제출하면 꽤 많이 틀렸다.
#
어떤 경우가 실패할까 고민하다 "(()())" 이 경우에 true가 return되야 하지만 false가 return 되었다.

```js
function solution(s){
    s = s.split('')
    let check = 0
    while (s[0]) {
        if (s[0] === '(') check++
        else {
            if (check > 0) check--
            else return false
        }
        s.shift()
    }
    const answer = check === 0 ? true : false
    return answer;
}
```
코드를 수정하여 while문을 돌면서 check가 0 보다 작으면 바로 false를 return 하였다.
#
그리고 check가 0 이면 짝이 맞는 것으로 true를, 0이 아니라면 짝이 맞지 않는 것으로 false를 return하였다.
#
결과적으로 적확성은 전부 통과했지만, 효율성 2문제는 모두 시간초과가 났다.
```js
function solution(s){
    let check = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') check++
        else {
            if (check > 0) check--
            else return false
        }
    }
    const answer = check === 0 ? true : false
    return answer;
}
```
s 문자열을 배열로 만들지 않고 바로 for문을 활용하는 식으로 코드를 수정하였다.

s를 굳이 배열로 만들어서 shift함수를 사용해야하는 것이 시간초과의 원인이였다.

## 느낀점
배열을 다루기보다 문자열을 다루는 것이 확실히 더 빠르다.

될 수 있으면 문자열을 배열로 만드는 것은 지양해야겠다.