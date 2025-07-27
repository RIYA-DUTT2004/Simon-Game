let gameSeq=[];
let userSeq=[];
let colors=["yellow","blue","green","red"];

let started=false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userBtnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=colors[randomIdx];
    let randBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnFlash(randBtn);
}

function checkAns(idx){
    
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }

    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}<b><br> Press any key to start again`;
        document.body.classList.add("game-over");

        setTimeout(() => {
        document.body.classList.remove("game-over");
        }, 600); // Red background stays for 600ms
        reset();
        
    }
    
}

function btnPress(){
    let btn=this;
    userBtnFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
