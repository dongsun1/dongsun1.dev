---
title: '[CS] 자료구조 Map이란?'
desc: 'Map이란 Key와 Value로 이루어진 자료구조이다.
순차적으로 메모리에 데이터를 저장하는 배열과 리스트와는 달리 Key와 Value로 구성되어 있다'
date: 2022/12/11
category: CS
---

## 자료구조 Map 이란?

Map이란 Key와 Value로 이루어진 자료구조이다.

순차적으로 메모리에 데이터를 저장하는 배열과 리스트와는 달리 Key와 Value로 구성되어 있다.

![Map](https://ifh.cc/g/t1SWXC.png)

## Map을 사용하는 이유

Map의 특징은 Key, value로 나뉘고 순서가 없고 Key는 중복을 허용하지 않는다는 것이다.

List 같은 자료구조를 사용할 수 있지만 명백한 **속도**차이가 나기 때문에 Map을 사용하는 것이 좋다.

#

Map을 사용해야 되는 경우는 다음과 같다.

- 특정 데이터를 순간마다 캐치해야 할 때
- 특정 품목의 갯수를 카운트 해야할 때
- 저장하고 싶은 데이터가 특별한 Key 값을 가질 때

## Map 사용법

- set(key, value): 저장
- get(key): key에 해당하는 값
- has(key): key에 해당하는 값이 있는지 확인
- delete(key): key에 해당하는 값 삭제
- size: map의 값 개수
- clear(): 전체 삭제
- entries(): 맵의 모든 키-값 쌍을 [Key, Value] 형태의 Array로 만들어서 반환
- forEach(): 맵의 모든 키-값 쌍에 대해서 콜백함수 사용
- keys(): 맵의 모든 Key들을 반환

```javascript
const map = new Map();

map.set('a', 1);
map.set('b', 1);

map.get('a'); // 1
map.has('b'); // true
map.set('a', 0);
map.get('a'); // 0

map.delete('a'); // true
map.delete('c'); // false

map.size; // 1
// map => Map(1) {'b' => 2}

map.clear();
// map => Map(0) {}
```

#

알고리즘 문제를 풀 때 배열을 사용해서 푸는 경우가 많다.

만약 시간초과가 난다면 Map을 사용할 수 있다면 사용해서 풀어보면 좋을 것 같다.

## Source

- https://blog-of-gon.tistory.com/187
- https://im-designloper.tistory.com/31
- https://nemne.tistory.com/9
