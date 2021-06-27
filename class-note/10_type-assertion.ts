// 타입 단언(type assertion)
let a;
a = 20;
a = 'a';
let b = a as string;

// DOM API 조작
// DOM API : document라는 속성에서 제공하는 속성 또는 API, 웹 페이지의 태그 정보를 접근하고 조작할 수 있는 API
let div = document.querySelector('div');
div.innerText

// document.querySelector가 실행되는 특정 라인에서 div가 있다는 보장을 해주지 않음
// => div가 있는지 확인하고 조작을 하는 것이 일반적인 패턴임
if (div) {
  div.innerText
}

