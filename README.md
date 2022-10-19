

# 1. TypeScript 설치

```jsx
sudo npm install -g typescript
```

[타입스크립트 다운로드 링크](https://www.typescriptlang.org/download)

[Playground](https://www.typescriptlang.org/ko/play?#code/MYewdgzgLgBAtgTwHIEM4FMBc0BOBLMAcxgF4YByOFAD3IChFUNSKArFYAa3qA)

- 공식문서에서 알려준 내용으로 전역 설치하게 되면 안되고 앞에 sudo를 붙여 줘서 설치해야한다.

# 2. 타입스크립트

- Statically Typed - compile할 때 타입에 대한 에러를 잡을 수 있다.
- client-side && server-side, Javascript 런타임 환경때 어디든 사용할 수 있다.
- 타임스크립트는 transcompiles 해서 Javascript언어로 바꿔줘야한다. 툴로는 내장되어있는 컴파일러나 바벨을 쓴다.
- 자바스크립트 에러를 보다 빠르게 catch할 수 있다.
- 가독성이 좋아진다
- 타입스크립트는 오픈소스 언어이다.
- 기존에 자바스크립트 언어를 부분적으로 변환할 수 있다.

# 3. 컴파일링

- 컴파일링을 해주는 터미널 명령어
  - 확장명이 .js로 바뀐 파일이 하나 더 생기고, 브라우저에서도 에러없이 잘 작동 되는걸 알 수 있다.

```jsx
tsc 01.ts
```
![스크린샷 2022-10-11 오후 9 34 12](https://user-images.githubusercontent.com/105795166/196451115-18726d82-e7f9-478d-a73e-bdf33464ef3b.png)



## 3-1. 조금 더 편하게!!

```jsx
sudo npm install -g ts-node
```

- 전역으로 설치 한다.
  - 바로 실행 시킬수있다.
  ```jsx
  ts-node 01.ts
  ```
![스크린샷 2022-10-11 오후 9 40 40](https://user-images.githubusercontent.com/105795166/196451071-140f2694-f95b-4996-a067-b69764a7eff2.png)

- 실시간 업데이트 (ts파일에서 수정하면 js파일에 자동 수정)
  - watch mode

```jsx
tsc 01.ts -w
```
