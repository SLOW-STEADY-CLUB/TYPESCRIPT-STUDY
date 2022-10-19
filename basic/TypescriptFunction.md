```ts
{
// JavaScript ==> TypeScript
function javascript(num1, num2) {
    return num1 + num2;
}

function typescript(num1: number, num2: number): number {
    retrun num1 + num2;
}
// 숫자만 정확하게 넘길 수 있다.

}
```

```js
//fetching할 때
function javascriptNum(id) {
  //여러코드
  return new Promise((resolve, reject) => {
    resolve(200);
  });
}
```

```ts
// typescript
function javascriptNum(id: string): Promise<number> {
  //여러코드
  return new Promise((resolve, reject) => {
    resolve(200);
  });
}
```
