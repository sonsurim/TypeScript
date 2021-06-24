// function logMessage(value: any) {
//   console.log(value);
//   value.
// }

// logMessage('hello');
// logMessage(100);
let surim: string | number;

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }

  if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number!');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   someone.name
//   someone.skill
//   someone.age
// }

// askSomeone()
// askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({ name: '수림', age: 100 });
// askSomeone이라는 함수의 인자로 Developer의 데이터 || Perosn의 데이터를 할당 가능

function askSomeone(someone: Developer & Person) {
  someone.name
  someone.skill
  someone.age
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '수림', age: 100 });
askSomeone({name: '수림디벨로퍼', age:100, skill: '웹 개발'});
// Developer와 Person의 속성들을 모두 합친 하나의 타입만 할당 가능

let rim: string | number | boolean;
let son: string & number & boolean;
