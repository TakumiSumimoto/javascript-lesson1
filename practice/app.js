console.log('Hello World!');
let text = 'JavaScriptの練習';
console.log(text);
text = 'JavaScriptをマスターした';
console.log(text);
let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);
let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen);

function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();