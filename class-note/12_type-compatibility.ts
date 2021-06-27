// 타입 호환성 - 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
var person: Person;
// developer = person; // Error 발생


// person은 속성이 name밖에 없음
// developer는 name, skill 속성이 2개 있음
// person을 developer에 할당할 수 없음
// => developer가 pserson보다 객체에 더 많은 속성들, 구조적으로 더 큰 관계를 가지고 있기 때문
// 타입 호환 : 오른쪽에 있는 타입이 더 많은 속성을 가지거나 구조적으로 더 컸을 때만 왼쪽과 호환이 됨

let add = function(a: number) {
  // ...
}

let sum = function(a:number, b:number) {
  // ...
}
add = sum
// sum은 두 개의 인자를 넘겨줘야 하는데 adds는 하나의 인자만 받을 수 있음 > 호환 불가
sum = add
// add는 파라미터를 하나 가지는 함수인데 sum은 파라미터를 2개 가지는 함수임 > 호환 가능


// add와 sum의 차이 : 파라미터 갯수
// 함수 크기 비교
// add < sum

// 함수 자체를 변수에 담아서 변수를 비교하기 위해 함수 표현식으로 작성

// 제네릭
interface Empty<T> {
// ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

// interface는 내부 구조적으로 비어있기 때문에 어떤값이 들어와도 서로 동일한 타입이라고 간주를 하게 됨
interface NotEmpty<T> {
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// 동일한 속성은 있지만 오른쪽의 타입이 달라짐 > 구조적인 타입의 차이가 생김 > 서로 호환 불가

notempty1 = notempty2;
notempty2 = notempty1;