//変数宣言
let num1 = '';      //1番目の整数
let num2 = '';      //2番目の整数
let num3 = '';      //3番目の整数
let num4 = '';
let sum = 0;        //1番目と2番目の整数の合計

let numNumber = 1; //現在何番目の整数を編集中なのか表す。初期はもちろん1番目
let sign = 1;          //演算子を表す。加算なら1、減算なら2を後ほど代入する

//定数宣言
const display = document.querySelector('.display');

const key1 = document.querySelector('.key1');
const key2 = document.querySelector('.key2');
const key3 = document.querySelector('.key3');
const key4 = document.querySelector('.key4');
const key5 = document.querySelector('.key5');
const key6 = document.querySelector('.key6');
const key7 = document.querySelector('.key7');
const key8 = document.querySelector('.key8');
const key9 = document.querySelector('.key9'); 
const key0 = document.querySelector('.key0');
const key00 = document.querySelector('.key00');

const keyPlus = document.querySelector('.keyPlus');
const keyMinus = document.querySelector('.keyMinus');
const keyMultiply = document.querySelector('.keyMultiply');
const keyDivide = document.querySelector('.keyDivide');
const keyEqual = document.querySelector('.keyEqual');

const numberKeys = [key0, key1, key2, key3, key4, key5, key6, key7, key8, key9];

const operatorKeys = [keyPlus, keyMinus, keyMultiply, keyDivide];

// 演算子
const operators = ['+', '-', '*', '/'];

// 演算子の優先順位を表す
const defaultOperatorLevel = [1, 1, 2, 2];

let numbers = [];
let numberIndex = 0;

// 入力された演算子が文字列でここに入る
let inputOperators = [];

// カッコを使用するときにカッコ一つごとの演算子に対しての重みづけとして使用する
let operatorWeight = 1;

// inputOperatorsの優先度をここに格納する
let operatorLevel = [];



// 数値を入力されたときのイベントリスナー関数を生成する関数
// 要するにfunction one()といった関数を自動的に作成している
function setupNumber(n) {

  // クロージャという仕組みを活用している
  return function(){
    display.textContent += n;
    let num = numbers[numberIndex];
    if(!num){
      num = n;
    }else{
      // 数値を文字列型に変換する
      num += String(n)
    }
    numbers[numberIndex] = num;
  }
  
}

function setupOperator(opIndex){

  return function(){
    display.textContent += operators[opIndex];
    inputOperators.push(operators[opIndex]);
    operatorLevel.push(defaultOperatorLevel[opIndex] * operatorWeight);
    numberIndex ++;
  }
}

function executeCalc(){
  console.log(numbers);
  console.log(inputOperators);
  console.log(operatorLevel);

  
}


for(let i = 0; i < numberKeys.length; i ++){
  numberKeys[i].addEventListener('click', setupNumber(i));
}

for(let i = 0; i < operatorKeys.length; i ++){
  operatorKeys[i].addEventListener('click', setupOperator(i));
}
/*keyPlus.addEventListener('click', plus);
keyMinus.addEventListener('click', minus);
keyMultiply.addEventListener('click', multiply);
keyDivide.addEventListener('click', divide);*/
keyEqual.addEventListener('click', executeCalc);
