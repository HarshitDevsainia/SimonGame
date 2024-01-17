let start=false;
let color=["red","green","blue","yellow"];
let level=0;
let userColor=[];
let gameColor=[];
let body=document.querySelector('body');
let reset=document.querySelector('.Reset');
let startbtn=document.querySelector('.start');
function gameflase(color){
    let btn=document.querySelector(`.${color}`);
    btn.classList.add('gameflash');
    setTimeout(() => {
        btn.classList.remove('gameflash');
    }, 250);
}
function levelUp() {
    userColor=[];
    let coloridx=Math.floor(Math.random()*3);
    let getcolor=color[coloridx];
    gameColor.push(getcolor);
    gameflase(getcolor);
    console.log(gameColor);
    let Showstarter=document.querySelector('h2');
    Showstarter.innerHTML=`Level: ${++level}`;
}
let allbtn=document.querySelectorAll('.btn');
console.log(start);
for(btn of allbtn)btn.addEventListener('click',bntPress)

function bntPress(){
    let btn=this;
    gameflase(btn.id);
    userColor.push(btn.id);
    checkButton(userColor.length-1);
    console.log(userColor);
}
startbtn.addEventListener('click',()=>{
    if(!start){
        body.classList.remove('gameOver');
        setTimeout(() => {
            levelUp();
            start=true;
        }, 250);
    }
});

function checkButton(idx){
    if(userColor[idx]===gameColor[idx]){
        if(userColor.length===gameColor.length){
            console.log("similar");
            setTimeout(()=>{
                levelUp()
            },500);
        }
    }
    else{
        if(start){
            console.log('game Over');
            body.classList.add('gameOver');
            setTimeout(() => {
                body.classList.remove('gameOver');
            }, 100);
            let Showstarter=document.querySelector('h2');
            Showstarter.innerHTML=`Game is Over Your Score is: ${level}`;
            ResetGame();
        }
    }
}
function ResetGame() {
    userColor=[];
    gameColor=[];
    level=0;
    start=false;
}
reset.addEventListener('click',()=>{
    ResetGame();
    let temp=document.querySelector('h2');
    console.log(temp);
    temp.innerHTML='Press Start Game button to start the Game';
});
