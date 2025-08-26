let gameSq = [];
let userSq = [];

let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}



function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    // Random button choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    btnFlash(randBtn);
}

function btnPress() {
    // console.log("btn was pressed");
    console.log(this);
    let btn = this;
    userFlash(btn);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}