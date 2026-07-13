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
 */
const myProfile = {
  name: "じゃけぇ",
  age: 31,
};      