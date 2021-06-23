// interface Person {
//   name: string,
//   age: number
// }

type Person = {
  name: string,
  age: number
}

let surim: Person = {
  name: '수림',
  age: 30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id:string; title:string; done:boolean };
function getTodo(todo: Todo) {}
