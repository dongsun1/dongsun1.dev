---
title: BFS (너비 우선 탐색)
desc: BFS
date: 2022/04/01
category: Algorithm
---

## BFS (너비 우선 탐색)

#### 최대한 넓게 이동한 다음, 더 이상 갈 수 없을 때 아래로 이동

![img](https://blog.kakaocdn.net/dn/c305k7/btqB5E2hI4r/ea7vFo08tkDYo4c8wkfVok/img.gif)

#### 너비 우선 탐색(BFS)의 개념

루트 노드(혹은 다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법으로,

시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법이다.

주로 두 노드 사이의 최단 경로를 찾고 싶을 때 이 방법을 선택한다.

ex) 지구 상에 존재하는 모든 친구 관계를 그래프로 표현한 후 Sam과 Eddie사이에 존재하는 경로를 찾는 경우

- 깊이 우선 탐색의 경우 - 모든 친구 관계를 다 살펴봐야 할지도 모름
- 너비 우선 탐색의 경우 - Sam과 가까운 관계부터 탐색

#### 너비 우선 탐색(BFS)의 구현

```js
void search(Node root) {
  Queue queue = new Queue();
  root.marked = true; // (방문한 노드 체크)
  queue.enqueue(root); // 1-1. 큐의 끝에 추가

  // 3. 큐가 소진될 때까지 계속한다.
  while (!queue.isEmpty()) {
    Node r = queue.dequeue(); // 큐의 앞에서 노드 추출
    visit(r); // 2-1. 큐에서 추출한 노드 방문
    // 2-2. 큐에서 꺼낸 노드와 인접한 노드들을 모두 차례로 방문한다.
    foreach (Node n in r.adjacent) {
      if (n.marked == false) {
        n.marked = true; // (방문한 노드 체크)
        queue.enqueue(n); // 2-3. 큐의 끝에 추가
      }
    }
  }
}
```

#### 너비 우선 탐색(BFS)의 시간 복잡도

- 인접 리스트로 표현된 그래프: O(N+E)
- 인접 행렬로 표현된 그래프: O(N^2)
- 깊이 우선 탐색(DFS)과 마찬가지로 그래프 내에 적은 숫자의 간선만을 가지는 희소 그래프(Sparse Graph) 의 경우 인접 행렬보다 인접 리스트를 사용하는 것이 유리하다.
