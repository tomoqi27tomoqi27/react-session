// var var1 = 'var変数';
// console.log(var1);
// // var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);
// // var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(var1);
// // できてなくね？？→保存していないから反映されていないだけ。保存して再度実行すると反映される。

// let val2 = 'let変数';
// console.log(val2);

// // let変数は上書き可能
// val2 = 'let変数を上書き';
// console.log(val2);

// // let変数は再宣言不可能
// // let val2 = 'let変数を再宣言';

// const val3 = 'const変数';
// console.log(val3);

// // const変数は上書き不可能
// // val3 = 'const変数を上書き';

// // const変数は再宣言不可能
// // const val3 = 'const変数を再宣言'; 

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 31,
// };

// // プロパティの変更とプロパティの追加は可能
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 31;
// // 「私の名前はじゃけぇです。年齢は31歳です。」

// // 従来の方法 プラスで結合するのはめんどくさい
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}さいです。`;
// console.log(message2);  

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// // constでfunc1の中に関数を入れることもできる
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // // アロー関数
// const func2 = (str) => {
//   return str;
// };
// // 引数が一つの場合は()を省略できる
// const func2 = str => {
//   return str;
// };
// console.log(func2("func2です"));

// // 処理が一行の場合はreturnを省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

/**
 * 分割代入
//  */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 31,
// };      

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}さいです。`;
// console.log(message1);

// // 分割代入を用いた方法
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}さいです。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 31];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}さいです。`;
// console.log(message3);

// // 分割代入を用いた方法
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}さいです。`;
// console.log(message4);

/**
 * デフォルト値、引数分割代入
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

// const myProfile = {
//   age: 31
// };
// const {age, name = "ゲスト" }=myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記法
 * 従来の記法
 */
// const name = "じゃけぇ";
// const age = 31;

// const myProfile = {
//   name: name,
//   age: age,
// };
// console.log(myProfile);

// // オブジェクトの省略記法を用いた方法→オブジェクトの定義しているプロパティの名前と同じ変数名を使う場合は省略できる
// const myProfile2 = {
//   name,
//   age,
// };
// console.log(myProfile2);

/**
 * スプレッド構文 ...
 */
// 配列の展開

// console.log(arr1);
// console.log(...arr1);
// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); 

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

/**
 * mapやfilterを使った配列の処理
 */

// // for文を使った方法
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// mapを使った方法
// const nameArr = ["田中", "山田", "じゃけぇ"];
// nameArr.map((name) => {
//   console.log(name);
// });
// console.log(nameArr2);

// mapの引数にindexを入れると、配列の番号も取得できる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// // filterを使った方法
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr); 

const nameArr = ["田中", "山田", "じゃけぇ"];
const nameArr2 = nameArr.map((name, index) => {
  return index<2 ? name : `${name}さん` 
});
console.log(nameArr2);
