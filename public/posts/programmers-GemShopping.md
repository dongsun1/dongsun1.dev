---
title: "[프로그래머스] 보석 쇼핑 - JavaScript"
desc: '개발자 출신으로 세계 최고의 갑부가 된 어피치는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다.
어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.'
date: 2022/12/10
category: Algorithm
---

## [카카오 인턴] 보석 쇼핑

### 문제 설명

[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

#

개발자 출신으로 세계 최고의 갑부가 된 어피치는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다.

#

어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.

#

어느 날 스트레스를 풀기 위해 보석 매장에 쇼핑을 하러 간 어피치는 이전처럼 진열대의 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.

#

진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매

#

예를 들어 아래 진열대는 4종류의 보석(RUBY, DIA, EMERALD, SAPPHIRE) 8개가 진열된 예시입니다.

| 진열대 번호 | 1   | 2    | 3    | 4   | 5   | 6       | 7        | 8   |
| ----------- | --- | ---- | ---- | --- | --- | ------- | -------- | --- |
| 보석 이름   | DIA | RUBY | RUBY | DIA | DIA | EMERALD | SAPPHIRE | DIA |

진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.

#

진열대의 3, 4, 6, 7번의 보석만 구매하는 것은 중간에 특정 구간(5번)이 빠지게 되므로 어피치의 쇼핑 습관에 맞지 않습니다.

#

진열대 번호 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어집니다. 이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.

#

가장 짧은 구간의 시작 진열대 번호와 끝 진열대 번호를 차례대로 배열에 담아서 return 하도록 하며, 만약 가장 짧은 구간이 여러 개라면 시작 진열대 번호가 가장 작은 구간을 return 합니다.

### 제한사항

- gems 배열의 크기는 1 이상 100,000 이하입니다.
  - gems 배열의 각 원소는 진열대에 나열된 보석을 나타냅니다.
  - gems 배열에는 1번 진열대부터 진열대 번호 순서대로 보석이름이 차례대로 저장되어 있습니다.
  - gems 배열의 각 원소는 길이가 1 이상 10 이하인 알파벳 대문자로만 구성된 문자열입니다.

### 입출력 예

| gems                                                                | result |
| ------------------------------------------------------------------- | ------ |
| ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"] | [3, 7] |
| ["AA", "AB", "AC", "AA", "AC"]                                      | [1, 3] |
| ["XYZ", "XYZ", "XYZ"]                                               | [1, 1] |
| ["ZZZ", "YYY", "NNNN", "YYY", "BBB"]                                | [1, 5] |

### 문제 풀이

```javascript
function solution(gems) {
  var answer = [1, gems.length];
  const must = new Set(gems).size;

  const arr = [];
  for (let i = 0; i < must - 1; i++) arr.push(gems[i]);

  let lt = 0;
  for (let rt = must - 1; rt < gems.length; rt++) {
    arr.push(gems[rt]);
    let set = new Set(arr);
    if (set.size === must) {
      answer = answer[1] - answer[0] > rt - lt ? [lt + 1, rt + 1] : answer;
      while (set.size >= must) {
        arr.splice(0, 1);
        lt++;
        set = new Set(arr);
        if (set.size === must) {
          answer = answer[1] - answer[0] > rt - lt ? [lt + 1, rt + 1] : answer;
        }
      }
    }
  }

  return answer;
}
```

조금 지저분하지만 투포인터를 활용해서 arr라는 배열에 보석들을 담아가면서 문제를 풀었다.

결과는...

![code](https://ifh.cc/g/Rz2SVy.jpg)
![code](https://ifh.cc/g/F4C5RZ.png)

배열을 사용하다보니 시간초과가 나는 것 같았다.

다른 분들의 풀이를 참고하여 맵 자료구로를 활용해서 문제를 풀었다.

### 다시 풀이

```javascript
function solution(gems) {
  var answer = [1, gems.length];
  const must = new Set(gems).size;
  const gemMap = new Map();

  gems.forEach((gem, i) => {
    // gemMap에 gem이 있다면 delete
    gemMap.delete(gem);
    gemMap.set(gem, i);

    // gemMap에 모든 종류가 포함되어 있을 때
    if (gemMap.size === must) {
      // 첫번 째 인덱스
      const value = gemMap.values().next().value;
      // 길이가 더 짧을 때 answer에
      answer = answer[1] - answer[0] > i - value ? [value + 1, i + 1] : answer;
    }
  });

  return answer;
}
```

## 느낀점

프로그래머스 기준 level 3 문제이다.

Map 자료구조에 대해서 잘 몰랐는데 속도에서 감탄했다.

배열과 비교하면 차원이 다른 속도를 보여주었다.

#

Map 자료구조에 대해서 공부하고 포스팅해야겠다!
