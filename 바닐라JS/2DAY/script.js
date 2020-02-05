/*  DAY2  */
//console이라는 object에 있는 함수 log
//console.log(console);

/*
function sayHello(name, age){
  console.log('Hello!', name, " you have", age, "years of age."); //2개의 인자
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
// "Ella"(argument : 인자)

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
//html의 id값에 접근하는 방법
//const title = document.getElementById("title");
const title = document.querySelector("#title"); // 노드의 첫번째 자식을 반환

console.log(title);

console.error("Fuck");

//DOM = Document Object Model
//자바스크립트는 html에 있는 값을 객체로 바꾸어 준다.(HTML -> DOM 객체)

title.innerHTML = "Hi! From JS";
console.log(title);
console.dir(title); // dir : 내가 건들일 수 있는 기능들 나열
title.style.color = "red";
console.dir(document);
document.title = "I own you";

function handleResize(){
    console.log("I have been resized");
}

function handleClick(){
    title.style.color = "blue";
}

window.addEventListener("resize", handleResize); // 브라우저의 크기가 달라지면 함수를 호출한다.
title.addEventListener("click", handleClick);  //title 객체를 클릭했을 때
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
// prompt : 옛날에 쓰던 거, 쓰지마!!
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
    title.addEventListener("click", handleClick); // mouseenter : 마우스 갖다댈 때
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
    title.classList.toggle(CLICKED_CLASS); // CLICKED_CLASS가 없으면 add, 있으면 remove
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