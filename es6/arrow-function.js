// 함수 선언문
function sum(a, b) {
  return a + b;
}
// 함수 표현식
var sum = function(a, b) {
  return a + b;
}

// 함수 표현식 (화살표 함수)
let sum = (a,b) => {
  return a + b;
}
let sum = (a,b) => a + b;

// 타입스크립트에서의 화살표 함수
let sum = (a: number, b: number): number => {
  return a + b
}