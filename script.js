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

const key1 = document.getElementById('key1');
const key2 = document.getElementById('key2');
const key3 = document.getElementById('key3');
const key4 = document.getElementById('key4');
const key5 = document.getElementById('key5');
const key6 = document.getElementById('key6');
const key7 = document.getElementById('key7');
const key8 = document.getElementById('key8');
const key9 = document.getElementById('key9'); 
const key0 = document.getElementById('key0');
const key00 = document.getElementById('key00');

const keyPlus = document.getElementById('keyPlus');
const keyMinus = document.getElementById('keyMinus');
const keyMultiply = document.getElementById('keyMultiply');
const keyDivide = document.getElementById('keyDivide');
const keyEqual = document.getElementById('keyEqual');

const keyAllClear = document.getElementById('keyAllClear');
const keyClear = document.getElementById('keyClear');

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
  
  while(inputOperators.length > 0){

    let heightOperator = searchHeightOperatorLevel();

    // 計算をする演算子のインデックス
    let calcIndex = operatorLevel.indexOf(heightOperator);
    if(calcIndex < 0){
      break;
    }
    let num1 = numbers[calcIndex];
    let num2 = numbers[calcIndex + 1];
    let result = calc(num1, num2, inputOperators[calcIndex]);

    // 計算した結果をnumbersに書き込みます
    numbers.splice(calcIndex + 1, 1);
    numbers[calcIndex] = result;
    

    operatorLevel.splice(calcIndex, 1);
    operators.splice(calcIndex, 1);
  }


  let result = numbers[0];
  
  numbers = [];

  return result;
}


// 二つの数の計算をします
function calc(num1, num2, op){
  console.log("演算子:" + op);
  switch(op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/': 
      return num1 / num2;
  }

}
// 最も優先度の高い演算子を探しそのレベルを返します
function searchHeightOperatorLevel(){

  let max = -1;
  for(let i = 0; i < inputOperators.length; i ++){
    if(max < operatorLevel[i]){
      max = operatorLevel[i];
    }
  }
  console.log("max:" + max);
  return max;
}

function executeAndDisplay(){
  let result = executeCalc();
  display.textContent = String(result);
}

function allClear(){
  numbers = [];
  numberIndex = 0;
  operatorLevel = [];
  operatorWeight = 1;
  inputOperators = [];
  display.textContent = '';
}

for(let i = 0; i < numberKeys.length; i ++){
  numberKeys[i].addEventListener('click', setupNumber(i));
}

for(let i = 0; i < operatorKeys.length; i ++){
  operatorKeys[i].addEventListener('click', setupOperator(i));
}

keyEqual.addEventListener('click', executeAndDisplay);
keyAllClear.addEventListener('click', allClear);
