enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제

enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
  console.log('정답입니다!');
  }
  if (answer === Answer.No) {
    console.log('오답입니다!');
  }
}

// 이넘을 이용한 정의기 때문에 이넘에서 제공하는 데이터만 넘길 수 있음
askQuestion(Answer.Yes);
askQuestion('Yes');
askQuestion('예스');
askQuestion('Y');

// function askQuestion(answer: string) {
//   if (answer === 'yes') {
//   console.log('정답입니다!');
//   }
//   if (answer === 'no') {
//     console.log('오답입니다!');
//   }
// }

// askQuestion('예스');
// askQuestion('Y');
// askQuestion('yes');

// 기존 : 다양한 형태의 문자열을 넣을 수 있음
// 이넘 : 문자열을 구체적인 값으로 지정