interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let surim: User = {
  age: 24,
  name: '수림'
}

// 함수에 인터페이스 활용
function getUser(user:User) {
  console.log(user);
}
const son = {
  name: '수림',
  age: 100
}
getUser(son);

// 함수의 스팩(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b:number): number;
}

let sum: SumFunction;
sum = function(a: number, b:number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
};

let arr: StringArray = ['a','b','c'];
// arr[0] = 10; // string이어야 할당 가능

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj['cssFile'] = /t/ // 할당 O
// obj['cssFile'] = 'a' // 할당 X

Object.keys(obj).forEach(function(value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const rim: Developer = {
  language: 'TypeScript'
}