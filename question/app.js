//基礎
//Q1
let nickname = 'すみもと';
let age = 27;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//Q5
function sayHello() {
  console.log('Hello');
}
sayHello();

//Q6
const sayWorld = function() {
  console.log('World');
}
sayWorld();

//Q7
user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday: '2000-09-27',
  sayHello: function() {
    console.log('Hello!');
  }
};
user.sayHello();

//Q8
let calc = {
  add: function(x, y) {
    console.log(x + y);
  },
  subtract: function(x, y) {
    console.log(x - y);
  }
};
calc.add(3, 4);
calc.subtract(11, 1);

//Q9
function remainder(x, y) {
  let calc = x % y;
  return calc;
}
console.log('5を3で割った余りは' + remainder(5, 3) + 'です。');

//Q10
/* 変数xは、foo関数の中で定義されており、関数の外から console.log で呼び出そうとしても、
スコープの外である為、参照できない。
*/

//応用
//Q1
console.log(Math.floor(Math.random() * 10));

//Q2
setTimeout(()=> {
  console.log('Hello World');
}, 3000);

//Q3
function Distribute(num) {
  if (num > 0) {
    console.log('num is greater than 0');
  } else if (num < 0) {
    console.log('num is less than 0');
  } else {
    console.log('num is 0');
  }
};

//Q4
let numbers = [];
for (let i = 0; i < 99; i++) {
  numbers [i] = i+1;
};
console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < 7; i++) {
  if (typeof mixed[i] !== 'number') {
    console.log('not number');
  } else if (mixed[i] % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};
