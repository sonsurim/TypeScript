// 기존 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let rim = new Person('rim', 300);

// Class
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다!');

    this.name = name;
    this.age = age;
  }
}

let rim = new Person('수람', 24); // '생성되었습니다!'
console.log(rim)