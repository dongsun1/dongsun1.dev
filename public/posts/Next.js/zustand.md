---
title: '[Next.js] Zustand 사용기'
desc: ''
date: 2023/01/03
category: Next.js
---

원티드 프리온보딩 사전과제를 하다가 상태관리가 필요해서 리액트 상태관리 라이브러리에 대해 알아보았다.

대표적으로 Redux, Context Api, MobX, Recoil, Jotai 등등 있었다.

#

가장 많이 사용하는 Redux는 오래된 라이브러리라 그런지 문법이나 사용법이 난해한 편이다.

#

또한 Context Api는 Redux보다 간단하고 직관적이지만, Context로 전달되는 값이 변경될 때마다 해당 Context를 사용하는 모든 자손 컴포넌트가 리렌더링되는 단점이 있다.

## Zustand

Zustand를 선택한 이유는 굉장히 쉽기 때문이다.

Redux의 단점인 난해하고 높은 러닝커브를 필요하다는 점을 해소할 수 있다.

또한 Context Api의 단점인 불필요한 렌더링을 막아줄 수 있다.

## Zustand 사용법

### Zustand 설치

먼저 Zustand를 설치해준다.

```bash
npm i zustand
// or
yarn add zustand
```

### Store 선언

Store를 선언할 때는 create라는 method를 사용해서 선언한다.

아래는 실제로 내가 Todo List를 만들때 사용했던 코드다.

```typescript
import create from 'zustand';
import { ITodo } from '../interfaces/todo.interface';

interface IUseTodoStore {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
  addTodo: (todo: ITodo) => void;
}

export const useTodoStore = create<IUseTodoStore>((set) => ({
  todos: [],
  setTodos: (todos: ITodo[]) => set((state) => ({ ...state, todos })),
  addTodo: (todo: ITodo) => set((state) => ({ ...state, todos: [...state.todos, todo] })),
}));
```

**todos**: 기본값 변수

**setTodos**: todos 변경하는 함수

**addTodos**: todos에 더해주는 함수

### Store 사용

```typescript
import api from '../pages/api';
import { useTodoStore } from '../store/todo';
import Todo from './todo';

export default function TodoList() {
  const { todos, setTodos } = useTodoStore();

  const response = await api.get('/todos');
  setTodos(response.data.data);

  return (
    <>
      {todos.length
        ? todos.map(({ id, title, content }) => {
            return (
              <div key={id} className="flex w-full justify-center mt-2">
                <Todo id={id} title={title} content={content} />
              </div>
            );
          })
        : null}
    </>
  );
}
```

useTodoStore에서 todos, setTodos를 꺼내와서 사용하면 끝이다.

## 마무리

아직 더 사용해봐야 알겠지만 내가 봤던 상태관리 라이브러리 중에 가장 직관적이고 간단한 것 같다.

상태관리 라이브러리들을 많이 사용해보진 않았지만 상대적으로 가볍고 쉬운 상태관리 라이브러리를 찾고 있다면 Zustand를 추천한다.
