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

//数字キーの関数を実装
function one() {            //1番のキーが押されたときに実行する関数
  display.textContent += 1; //ディスプレイに「1」とテキストを追加
  switch ( numNumber ) {　　//numNumberで現在何番目のnumを編集中なのか読み取り、
    case 1:
      num1 += '1';    //現在編集中のnumに１という文字列を連結する。　　　
      break;
    case 2:
      num2 += '1';
      break;
    case 3:
      num3 += '1';
      break;
    case 4:
      num4 += '1';
  }
}

function two() {
  display.textContent += 2;
  switch ( numNumber ) {
    case 1:
      num1 += '2';
      break;
    case 2:
      num2 += '2';
      break;
    case 3:
      num3 += '2';
      break;
    case 4:
      num4 += '2';
  }
}

function three() {
  display.textContent += 3;
  switch ( numNumber ) {
    case 1:
      num1 += '3';
      break;
    case 2:
      num2 += '3';
      break;
    case 3:
      num3 += '3';
      break;
    case 4:
      num4 += '3';
  }
}

function four() {
  display.textContent += 4;
  switch ( numNumber ) {
    case 1:
      num1 += '4';
      break;
    case 2:
      num2 += '4';
      break;
    case 3:
      num3 += '4';
      break;
    case 4:
      num4 += '4';
  }
}

function five() {
  display.textContent += 5;
  switch ( numNumber ) {
    case 1:
      num1 += '5';
      break;
    case 2:
      num2 += '5';
      break;
    case 3:
      num3 += '5';
      break;
    case 4:
      num4 += '5';
  }
}

function six() {
  display.textContent += 6;
  switch ( numNumber ) {
    case 1:
      num1 += '6';
      break;
    case 2:
      num2 += '6';
      break;
    case 3:
      num3 += '6';
      break;
    case 4:
      num4 += '6';
  }
}

function seven() {
  display.textContent += 7;
  switch ( numNumber ) {
    case 1:
      num1 += '7';
      break;
    case 2:
      num2 += '7';
      break;
    case 3:
      num3 += '7';
      break;
    case 4:
      num4 += '7';
  }
}

function eight() {
  display.textContent += 8;
  switch ( numNumber ) {
    case 1:
      num1 += '8';
      break;
    case 2:
      num2 += '8';
      break;
    case 3:
      num3 += '8';
      break;
    case 4:
      num4 += '8';
  }
}

function nine() {
  display.textContent += 9;
  switch ( numNumber ) {
    case 1:
      num1 += '9';
      break;
    case 2:
      num2 += '9';
      break;
    case 3:
      num3 += '9';
      break;
    case 4:
      num4 += '9';
  }
} 

function zero() {
  display.textContent += 0;
  switch ( numNumber ) {
    case 1:
      num1 += '0';
      break;
    case 2:
      num2 += '0';
      break;
    case 3:
      num3 += '0';
      break;
    case 4:
      num4 += '0';
  }  
}

function zerozero() {
  display.textContent += '00';
  switch ( numNumber ) {
    case 1:
      num1 += '00';
      break;
    case 2:
      num2 += '00';
      break;
    case 3:
      num3 += '00';
      break;
    case 4:
      num4 += '00';
  } 
}


//演算子・等号キーの関数を実装
function plus() {
  display.textContent += '+';
  numNumber++;
  sign = 1;
}

function minus() {
  display.textContent += '-';
  numNumber++;
  sign = 2;
}

function multiply() {
  display.textContent += '×';
  numNumber++;
  sign = 3;
}

function divide() {
  display.textContent += '÷';
  numNumber++;
  sign = 4;
}

function equal() {
  num1 = Number(num1);  //文字列から整数へ型変換！
  num2 = Number(num2);
  num3 = Number(num3);
  num4 = Number(num4);

  switch( sign ) {   //sign = 1なら加算、sign = 2なら減算を行う

  case 1:
    sum = num1 + num2 + num3 + num4;
    break;

  case 2:
    sum = num1 - num2 - num3 - num4;
    break;

  case 3:
    sum = num1 * num2;
    break;

  case 4:
    sum = num1 / num2 

  }
  display.textContent += '=' + sum;
}

//各キーにそれぞれのEventListenerを追加
key1.addEventListener('click', one);
key2.addEventListener('click', two);
key3.addEventListener('click', three);
key4.addEventListener('click', four);
key5.addEventListener('click', five);
key6.addEventListener('click', six);
key7.addEventListener('click', seven);
key8.addEventListener('click', eight);
key9.addEventListener('click', nine);
key0.addEventListener('click', zero);
key00.addEventListener('click', zerozero);

keyPlus.addEventListener('click', plus);
keyMinus.addEventListener('click', minus);
keyMultiply.addEventListener('click', multiply);
keyDivide.addEventListener('click', divide);
keyEqual.addEventListener('click', equal);
