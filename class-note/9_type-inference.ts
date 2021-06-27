// 타입 추론 기본1
let a = 'abc';

function getB (b = 10) {
  let c = 'hi';

  return b + c;
}

// 10 + '10'; // 1010

// 타입 추론 기본2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// let shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

// 타입 추론 기본3 - 복잡한 구조
// DetailedDropdown에 들어간 <타입 K>가 현재 인터페이스에 있는 tag 타입으로도 정의
// extends를 받았기 때문에 DetailedDropdown에 Dropdown에 있는 value, title이 들어옴
// DetailedDropdown에 들어온 <타입 K>을 Dropdown <타입 K>로 넘김
// DetailedDropdown의 <타입 K>가 DetailedDropdown의 제네릭 값<K>로 넘어감
// 해당 제네릭 값이 Dropdown에 있는 value의 <타입 T>으로 넘어감
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

let detailedItem : DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a'
}

// Best Common Type
// arr: number[]
let arr1 = [0, 1, 2];

// arr: (number | boolean)[]
let arr2 = [0, 1, null];

