document.write("Hello World!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>");
document.write("Hello World!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>");
//コメント
document.write(3 + 4 * 5);
document.write("<br>");
document.write("はろー"+"わーるど");
document.write("ハロー"+3+4);

let myGreatName;
myGreatName = "Becky Jones";
document.write(myGreatName);

let price = 100;
price = price / 2;
document.write(price);

let takaoHeight = 599;
let everestHeight = 8849;
let fujiHeight = 3776;
document.write(takaoHeight < everestHeight < fujiHeight); //trueになる
document.write(takaoHeight = everestHeight); //高尾がエベレストになる

document.write(true > 0.9); //true
document.write(true < 1.1); //true
document.write(true === 1); //false

document.write("<br>");

let age = 200;
document.write("貴様は"+age+"歳なので");
if(age < 18){
    document.write("選挙権はない");
}else if(age < 25){
    document.write("投票に行け");
}else{
    document.write("衆議院議員に立候補<s>しろ</s>できます");
}

function greet(greetingType, myName) { //引数 ひきすう
  document.write("Good " + greetingType + ", " + myName + "!");
}

greet("morning", "佐藤");
greet("morning", "佐藤");
greet("morning", "佐藤");
greet("morning", "佐藤");
greet("morning", "佐藤");


function add(a, b) {
  return a + b;
}

document.write(add(3, 4));

document.write("<br>");

let outer = 0;

function increment() {
  let inner = 0;
  outer = outer + 1;
  inner = inner + 1;
  document.write("outer="+outer+", "); // 1ずつ増える
  document.write("inner="+inner+"<br>"); // 常に1
}

increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();

function calculateCost(monthlyBandwidth) {
    // ここに処理を書く
    if(monthlyBandwidth < 5){
        return monthlyBandwidth * 600;
    }else{
        return 3000;
    }
}

document.write("携帯電話料金は"+calculateCost(0.03)+"円です<br>");

function incrementAge(person) {
    // let person  = { name: "田中", age: 18 };

    // ここに書く
    // person.age = person.age + 1;
    // return person;

    let nextYearPerson = { name: person.name, age: person.age + 1 };
    return nextYearPerson;

    // return {name:"田中", age:19};
    // return {age:tanaka.age+1}
};

let tanaka = { name: "田中", age: 18 };
let nextYearTanaka = incrementAge(tanaka);

let aaa = { name: "aaa", age: 18 };
let nextYearAaa = incrementAge(aaa);
document.write(tanaka.age); // 19 と表示されたら困る
document.write(nextYearTanaka.age); // 19 と表示されてほしい


function clicked(){
    let element = document.getElementById("greeting");
    element.textContent = "Hello DOM";
    element.style.backgroundColor = "blue";
    element.style.fontSize = "70px";

}
let greetButton = document.getElementById("greet-button");
greetButton.onclick = clicked;

let fortune0 = 0;
let fortune1 = 0;
let fortune2 = 0;
function fortune(){
    let fortuneResultArea = document.getElementById("fortune_result");
    let fortune0Area = document.getElementById("fortune0");
    let fortune1Area = document.getElementById("fortune1");
    let fortune2Area = document.getElementById("fortune2");
    let r = Math.random();
    if(r < 0.2){
        fortuneResultArea.textContent = "大吉";
        fortune0 = fortune0 + 1;
        fortune0Area.textContent = fortune0;
    }else if(r < 0.2+0.5){
        fortuneResultArea.textContent = "吉";
        fortune1 = fortune1 + 1;
        fortune1Area.textContent = fortune1;
    }else{
        fortuneResultArea.textContent = "凶";
        fortune2 = fortune2 + 1;
        fortune2Area.textContent = fortune2;
    }
}
let fortuneButton = document.getElementById("fortune_button");
fortuneButton.onclick = fortune;

let sec10 = 0;
let sec = 0;
let min = 0;
let stopwatchTimerId = -1;
function stopwatch(){
    let stopwatchValue = document.getElementById("stopwatch_value");
    stopwatchValue.textContent = min + ":" + sec.toString().padStart(2,"0") + "." + sec10;
    sec10 = sec10 + 1;
    if(sec10 >= 10){
        sec = sec + 1;
        sec10 = 0;
    }
    if(sec >= 60){
        min = min + 1;
        sec = 0;
    }
}
let stopwatchButton = document.getElementById("stopwatch_button");
function stopwatchStart(){
    stopwatchStop();
    sec = 0;
    min = 0;
    stopwatch();
    stopwatchTimerId = setInterval(stopwatch, 100);
    stopwatchButton.onclick = stopwatchStop;
    stopwatchButton.textContent = "ストップ";
}
function stopwatchStop(){
    if(stopwatchTimerId !== -1){
        clearInterval(stopwatchTimerId);
    }
    stopwatchButton.onclick = stopwatchStart;
    stopwatchButton.textContent = "スタート";
}
stopwatchButton.onclick = stopwatchStart;
// let stopwatchStopButton = document.getElementById("stopwatch_stopbutton");
