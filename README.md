[1. React TypeScript 설치](#1-react-typescript-설치)

[2. 이미 만들어진 React에 설치](#2-이미-만들어진-react에-설치)

## 1. React TypeScript 설치

```jsx
yarn create react-app my-app --template typescript
```





## 2. 이미 만들어진 React에 설치

```jsx
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

# typeScript Study

- 1-1 타입스크립트란
  - 마이크로소프트사에서 만든 프로그래밍 언어
  - 2012년 10월 출시
  - 자바스크립트가 작동하는 브라우저, 운영체제는 상관없이 대체 가능
    - 완전히 새로운 프로그래밍 언어가 아님
    - 자바스크립트를 감싸는 superset of Javascript 언어
    - 자바스크립트는 동적언어
      - 실시간으로 타입이 결정됨
      - 런타임 때 에러 발생 가능성 있음
      - 프로토타입을 베이스로 한 객체지향 프로그래밍언어
      - Constructor Functions를 이용해 간편하게 object 생성 가능
    - 타입스크립트는 강력한 타입이 정해진 언어
      - 컴파일 때 타입에 대한 에러를 캐치 가능
      - class, interface 등을 이용한 더 나은 객체 지향 프로그래밍 언어
  - 클라이언트 사이드, 서버 사이드 상관 없이 자바스크립트 런타임 환경이 존재하는 어떤 곳에서도 사용 가능
    - 타입스크립트 코드를 자바스크립트 코드로 변환(trasnscompile) 해야하기 때문에
      - 컴파일러
        - 타입스크립트 자체 컴파일러
        - 바벨
- 1-2 타입스크립트가 뜨는 이유
  - 자바스크립트는 동작할 때 타입이 실시간으로 결정되는 동적 언어
    - 런타임시 에러 발생 가능성
    - 타입이 없기 때문에 가독성이 떨어짐
  - 반면에 타입스크립트는 정적으로 결정되는 언어
    - 코딩을 할 때 타입이 결정되어 코딩을 하면서 타입에러를 캐치할 수 있음
    - 조금 더 안정적임
  - 강력한 객체지향 프로그래밍 가능
    - 객체 위주로 모듈성 있는 코드 작성 가능
    - 모듈별로 재사용 가능 → 재사용성 증가
    - 객체 단위로 확장할 수 있는 확장성도 높음
    - 기존 코드의 문제해결이나 새로운 코드를 추가할 때
      유지 보수성 높음
- 1-3 타입스크립트 공부하는 방법
  - 자바스크립트에 대한 기본 문법 필수!
  - 브라우저 web APIS에 대한 이해
  - types에 대한 정확한 이해가 필요
    - 다른 타입을 제공하는 프로그래밍 언어에 비해
      유연하고 강력한 타입을 제공
  - 객체 지향 프로그래밍(OOP)에 대한 정확한 이해
- 1-4 필요한 준비물들 설치
  - vscode
  - 터미널, nodejs, npm
  - typescript 설치
    - npm install -g typescript
- 1-5 북마크 해둬야 하는 사이트
  공식사이트 : [https://www.typescriptlang.org](https://www.typescriptlang.org/download)
  업데이트가 빈번하게 일어나므로 what’s new 섹션에서 확인할 것
- 1-6 함께 공식 사이트 읽어보기
  - 자바스크립트에 타입을 더한 프로그래밍 언어
    - 코드가 동작하기 전에 에러를 잡을 수 있음
    - 조금 더 안전하게 프로그래밍 가능
    - 가독성을 높여줌
- 1-7 심심풀이 땅콩 한 번 사용해 보기
  - 컴파일러에서 타깃을 모든 브라우저에서 호환 가능한 자바스크립트 코드로 변환됨
  - 가능한 한 최신버전으로 할 수록 코드가 간결해짐
  - 브라우저에 따라 다르지만 옛날 버전일 수록 성능이 안 좋아질 수 있음
- 1-8 타입스크립트 컴파일러 툴 소개
