interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Surim', age: 33, skill: 'Iron Making' }
}

let surim = introduce();
console.log(surim.skill);

// 객체에 skill이 있음에도 불구하고 skill이 없다고 나옴
// 유니온 타입을 쓰게되면 타입들의 공통된 속성만 접근 가능
// 타입의 범위를 점점 줄여가며 구체화해 나가는 것

if ( (surim as Developer).skill ) {
  let skill = (surim as Developer).skill;
  console.log(skill);
} else if ( (surim as Person).age ) {
  let age = (surim as Person).age
  console.log(age);
}

// 타입 가드 함수
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(surim)) {
  console.log(surim.skill);
} else {
  console.log(surim.age);
}
// isDeveliper를 통과하고 나면 target이 Developer인지 아닌지 구분해줌

// `target`이 Developer라고 가정하고 skill이라는 값이 있는 경우,
// target is Developer : Developser 타입이라고 취급
