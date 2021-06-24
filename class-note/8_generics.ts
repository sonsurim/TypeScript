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
