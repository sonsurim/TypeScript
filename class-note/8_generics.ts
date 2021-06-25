// AS-IS
// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText('안녕'); // 문자열 안녕
// logText(true); // 진위값 true

// To-BE
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('안녕')

// logText 함수 내부에서 처리하는 text에 대한 타입은 파라미터로 받은 string
// logText라는 함수에 인자를 넘김
// 해당 인자의 타입은 string이라고 generic으로 직접 정의

// 기본 타입의 문제점 - 타입을 다르게 받기 위해 중복되는 코드들을 생산하게 됨
// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logText('a');
// const num = logNumber(10);

// 유니온 타입의 문제점
// 타입을 다르게 보낼때의 문제는 해결됨 (input에 대한 문제)
// 공통으로 접근할 수 있는 속성이나 API에 대해서만 자동완성 제공 (output에 대한 문제)
// 반환 타입이 정확하게 추론되지 않음 > 해당 타입에 대한 메소드 사용 불가 (output에 대한 문제)

// function logText(text: string | number) {
//   console.log(text);
//   text.
//   return text;
// }

// const a = logText('a');
// console.log(a);
// logText(10);

// 제네릭 타입
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// `<T>` : 제네릭 사용 선언
// 함수를 정의할 때 받은 타입을 파라미터의 타입으로 정의
// 리턴값의 타입으로 정의

const abc = logText<string>('abc');
// 호출할 때 타입 정의 > 인자와 반환값 타입 정의

abc.toString()
// 정확한 타입 추론 > 해당하는 메소드 사용 가능

const login = logText<boolean>(true);

logText('a');
logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// value에는 string만 선언할 수 있음
// const obj: Dropdown = { value: 'abc', selected: false }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };
// interface안에 특정 타입을 추가로 정의 필요
// value의 타입이 전달하는 타입으로 정의됨

// Dropdown 인터페이스를 정의하는 데에 제네릭으로 정의를 할 때 타입을 선언하는 시점에
// 타입을 추가적으로 넘겨서 Dropdown이라는 인터페이스의 타입을 바꿀 수 있음

// 제네릭의 타입 제한
// - 제네릭을 더 엄격하게 사용할 때 접근하는 방식
// - 제네릭에 더 많은 옵션들을 사용할 때 접근하는 방식

// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach( text => console.log(text))
//   return text;
// }

// logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입 제한 - 2. 정의된 타입 이용하기
interface LengthType {
  length: number;
}
// LengthType 인터페이스의 length 속성이 number라는 타입을 가짐

function logTextLength<T extends LengthType>(text: T): T {
  // text.length;
  return text;
}
// 제네릭으로 받은 타입에 length 속성이 있을거라는 암시
// length 속성을 가지고 있는 타입만 인자로 받음

logTextLength('a');
// 문자열은 내부 속성으로 length가 제공
logTextLength([1]);
// 배열은 내부 속성으로 length가 제공
logTextLength({length: 10})
// length 속성이 있음

// ERROR
logTextLength({leng: 10});
// 객체는 내부 속성으로 length가 제공되지 않음 따로 length 속성 정의 필요
logTextLength(10);
// 숫자는 length가 내부 속성으로 제공되고 있지 않음

// 제네릭의 타입 제한 - 3. keyof로 제네릭의 타입 제한
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem 인터페이스에 정의되어 있는 속성(name,price,stock) 중 하나만 받도록 제한
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
   return itemOption;
}
// ShoppingItem 인터페이스에 있는 key 중 한가지가 제네릭이 될 것이라고 명시
// name, price, stock중 한가지만 인자로 들어올 수 있음

getShoppingItemOption('name')
getShoppingItemOption('price')
getShoppingItemOption('stock')