/*  DAY2  */
//console�̶�� object�� �ִ� �Լ� log
//console.log(console);

/*
function sayHello(name, age){
  console.log('Hello!', name, " you have", age, "years of age."); //2���� ����
}
*/

/*
function sayHello(name, age){
  console.log(`Hello! ${name} you are ${age} years old`);
}
*/

/*
return
function sayHello(name, age){
  return `Hello! ${name} you are ${age} years old`;
}
const greetElla = sayHello("Ella", 17); 
// "Ella"(argument : ����)

console.log(greetElla);
*/

/*
const calculator = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  mul: function(a, b){
    return a * b;
  },
  div: function(a, b){
    if(b > 0){
      return a / b;
    }else{
      return `do not divide!`
    }
  },
  power: function(a, b){
    return a**b;
  }
}

const plus = calculator.plus(5, 5);
console.log(plus);
console.log(calculator.minus(6, 7));
console.log(calculator.mul(3, 8));
console.log(calculator.div(6, 0));
*/

/*
//html�� id���� �����ϴ� ���
//const title = document.getElementById("title");
const title = document.querySelector("#title"); // ����� ù��° �ڽ��� ��ȯ

console.log(title);

console.error("Fuck");

//DOM = Document Object Model
//�ڹٽ�ũ��Ʈ�� html�� �ִ� ���� ��ü�� �ٲپ� �ش�.(HTML -> DOM ��ü)

title.innerHTML = "Hi! From JS";
console.log(title);
console.dir(title); // dir : ���� �ǵ��� �� �ִ� ��ɵ� ����
title.style.color = "red";
console.dir(document);
document.title = "I own you";

function handleResize(){
    console.log("I have been resized");
}

function handleClick(){
    title.style.color = "blue";
}

window.addEventListener("resize", handleResize); // �������� ũ�Ⱑ �޶����� �Լ��� ȣ���Ѵ�.
title.addEventListener("click", handleClick);  //title ��ü�� Ŭ������ ��
*/

/*
if(10 === 5){ // 10 === "10" -> false // "red" === "rod" -> false
    console.log("hi");
} else if("10" === "10"){
    console.log("lalala");
} else{
    console.log("ho");
}
*/

/*
// && : and // || : or
if(20 > 5 && "ella" === "ella"){
    console.log("yes");
} else {
    console.log("no");
}
*/

/*
// prompt : ������ ���� ��, ������!!
const age = prompt("");
console.log(age);


if(age >= 18 && age <= 21){
    console.log("you can drink but you should not");
} else if(age > 21){
    console.log("go ahead");
} else {
    console.log("too young");
}
*/

/*
const title = document.querySelector("#title");

const BASE_COLOR = "#FF0000";
const OTHER_COLOR = "#0000FF";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick); // mouseenter : ���콺 ���ٴ� ��
}

init();

function handleOffline(){
    console.log("7777777");
}
function handleOnline(){
    console.log("welcome back");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS); // CLICKED_CLASS�� ������ add, ������ remove
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }
    */
}

function init(){

    title.addEventListener("click", handleClick);
}

init();