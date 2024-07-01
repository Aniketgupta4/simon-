let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");
let button = document.querySelector("button");


// first step : game start

document.addEventListener("keypress",function(){
 if(started == false){
    console.log("game is started");
    started = true;

    levelup();
 }
});

// second step : flash and level up

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randbtn = document.querySelector(`.${randColor}`);
gameseq.push(randColor);
console.log(gameseq);
userFlash(randbtn);
}


// third step : function

function checkans(idx) {
   if(userseq[idx] === gameseq[idx]) {
       if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
       }
   }else{
    h4.innerHTML = `SCORE :<b>${level}</b>`;
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to Start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function()  {
        document.querySelector("body").style.backgroundColor= "white";
    }, 150);
    reset(); 
   }
}


function btnPress() {
  let btn = this; // this: o button press kiye wo
  userFlash(btn);

  userColor = btn.getAttribute("id"); 
  userseq.push(userColor);

  checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}



function reset() {
   started = false;
   gameseq = [];
   userseq = [];
   level = 0;
}









