---
title: "[프로그래머스] 베스트앨범 - JavaScript"
desc: '스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수혹하는 기준은 다음과 같습니다.'
date: 2022/10/15
category: Algorithm
---
## 베스트 앨범
### 문제 설명
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 

노래는 고유 번호로 구분하며, 노래를 수혹하는 기준은 다음과 같습니다.

1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

### 제한사항
- genres[i]는 고유번호가 i인 노래의 장르입니다.
- plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
- 장르 종류는 100개 미만입니다.
- 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
- 모든 장르는 재생된 횟수가 다릅니다.

### 입출력 예제
|genres|plays|return|
| - | - | - |
|["classic", "pop", "classic", "classic", "pop"]|[500, 600, 150, 800, 2500]|[4, 1, 3, 0]|

### 문제풀이
```javascript
function solution(genres, plays) {
    var answer = [];
    const obj = {}
    
    // 1.
    for(let i = 0; i < genres.length; i++){
        obj[genres[i]] = obj[genres[i]] ? obj[genres[i]] + plays[i] : plays[i]
    }
  	// obj =  { classic: 1450, pop: 3100 }
    
  	// 2.
    const entries = Object.entries(obj).sort((a, b) => b[1] - a[1])
    // entries = [ [ 'pop', 3100 ], [ 'classic', 1450 ] ]
    
    // 3.
    const allInfoObj = genres.map((genre, index) => ({
        genre,
        index,
        playCnt: plays[index]
    })) 
    // allInfoObj = [
  	// 	{ genre: 'classic', index: 0, playCnt: 500 },
  	// 	{ genre: 'pop', index: 1, playCnt: 600 },
  	// 	{ genre: 'classic', index: 2, playCnt: 150 },
  	// 	{ genre: 'classic', index: 3, playCnt: 800 },
  	// 	{ genre: 'pop', index: 4, playCnt: 2500 }
	// ]
    
    // 4.
    entries.forEach((k, i) => {
        const current = [];
        
        for(let j = 0; j < allInfoObj.length; j++) {
            if (k[0] === allInfoObj[j].genre) {
                current.push(allInfoObj[j]);
            }
        }
      	// 5.
        current.sort((a, b) => b.playCnt - a.playCnt);
        current.forEach((c, i) => {
            if (i < 2) {
                answer.push(c.index)
            }        
        })
    })
    
    return answer;
}
```

1. 먼저 장르별 플레이 합을 Object형식으로 만든다.
2. Object.entries를 사용하여 플레이 합을 기준으로 sort 해준다.
3. allInfoObj라는 변수에 genre, index, playCnt를 담은 Object 배열을 만든다.
4. current 배열에 allInfoObj genre가 같은 Object를 푸쉬한다.
5. playCnt로 sort한 뒤 앞에 2번째까지 answer에 푸쉬한다.


## 느낀점
프로그래머스 기준 Level 3이다.

내 기준 3단계 치고는 어렵진 않았던 것 같다.

Array에서 find하는 것보다 Hash를 활용하여 바로 원하는 값을 찾아내는 것이 더 빠르다.

실무에서도 배열끼리 비교하는 경우가 많은데 Hash를 잘 활용하여 로직의 속도를 개선할 수 있다.
