기본 타입 정리
JavaScript
Primitive: number, string, boolean, bigint(최신타입 큰숫자), symbol, null, undefined
Object: function, array..

Boolean
Number
String
Array
Tuple
Enum
Any
Void
Null and Undefined
Never
Object
Type assertions

기본타입 타입스크립트에서 선언할 때

const person:number = 2; // 인원을 숫자로 받을 때

Const isLoding:boolean = true; // 로딩상태값을 블리언으로 표현할 때

null과 undefined은 선언할 때는 잘 쓰지 않는다. 하지만 함수에서는 쓰이고
단독으로 안쓰인다. 

Function person(): number | undefined {
return undefined;
}


// Type assertions
두가지 문법이 있다.
실행은 동일하게 되지만, JSX문법 같은 경우에는 as 문법만 허용된다


"angle-bracket" 문법

```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

"as" 문법

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

출처 - 공식문서
https://typescript-kr.github.io/pages/basic-types.html