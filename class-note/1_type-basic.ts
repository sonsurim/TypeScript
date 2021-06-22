// JS 문자열 선언
// let str = 'hello';

// TS 문자열 선언
let str: String = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
let items: number[] = [1,2,3];

// TS 튜플
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {}

// 특정 속성과 속성의 값까지 타입 정의 가능 , 구체적으로 객체의 타입 정의 가능
let person: { name: string, age: number } = {
  name: 'surim',
  age: 24
}

// TS 진위값
let show: boolean = true;