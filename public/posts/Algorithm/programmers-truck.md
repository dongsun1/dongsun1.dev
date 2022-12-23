---
title: "[프로그래머스] 다리를 지나는 트럭 - JavaScript"
desc: '트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.'
date: 2022/12/20
category: Algorithm
---
## 다리를 지나는 트럭
### 문제 설명
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
#
예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 
순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

|경과 시간|	다리를 지난 트럭|	다리를 건너는 트럭|	대기 트럭|
|---|---|---|---|
|0	|[]	|[]|	[7,4,5,6]|
|1~2|	[]	|[7]|	[4,5,6]|
|3	|[7]|	[4]|	[5,6]|
|4	|[7]|	[4,5]|	[6]|
|5	|[7,4]|	[5]	|[6]|
|6~7|	[7,4,5]|	[6]	|[]|
|8	|[7,4,5,6]	|[]|	[]|

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
#
solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.



### 제한사항
- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.

### 입출력 예제

|bridge_length|	weight|	truck_weights|	return|
|---|---|---|---|
|2|	10|	[7,4,5,6]	|8|
|100|	100|	[10]	|101|
|100|	100|	[10,10,10,10,10,10,10,10,10,10]	|110|

### 문제풀이
```javascript
function solution(bridge_length, weight, truck_weights) {
  var answer = 1;
  // 다리를 건너는 트럭
  let onBridge = []
  // 다리를 지난 트럭
  let complete = []
  const length = truck_weights.length

  // time: 0, weight 초기화
  truck_weights = truck_weights.map(w => {
    return {
      time: 0,
      weight: w
    }
  })

  while (complete.length !== length) {
    // 다리 위 트럭 무게 총합
    const onBridgeWeightSum = onBridge.reduce((a, b) => a + b.weight, 0)

    // 대기중인 트럭이 있고, 
    // 다리 위 트럭 무게 총합과 대기중인 트럭 첫번째의 무개를 더한 값이 weight보다 작고,
    // 다리 위 트럭 개수가 다리 길이 보다 적을 때
    if (truck_weights.length && onBridgeWeightSum + truck_weights[0].weight <= weight && onBridge.length < bridge_length) {
      onBridge.push(truck_weights.shift())
    }

    // time + 1 이 다리 길이와 같을 때 complete에 push
    // 아니면 time + 1
    onBridge = onBridge.reduce((acc, o) => {
      if (o.time + 1 === bridge_length) {
        complete.push(o)
      } else {
        acc.push({
          time: o.time + 1,
          weight: o.weight
        })
      }
      return acc
    }, [])

    answer++
  }

  return answer;
}
```

1. 먼저 truck_weights에 time: 0을 넣어준다.
2. complete 길이와 트럭 개수가 같아질 때까지 반복한다.
3. if문 조건을 만족하면 onBridge 배열에 truck_weights.shift()하면서 push한다.
4. onBridge를 reduce 돌면서 time + 1이 bridge_length와 같다면 complete에 push, 아니면 time + 1 해준다.


## 느낀점
프로그래머스 기준 Level 3이다.

각 트럭마다 time을 넣는다는 생각을 하는 것이 쉽지 않았다.

다리가 꽉 찼거나 대기중인 트럭이 없다면 시간을 점프하여 좀 더 효율적인 코드를 짤수도 있을 것 같다.