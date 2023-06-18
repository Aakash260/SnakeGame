let inputDir= { x: 0, y: 0 };
let foodSound = new Audio('food.mp3');
let gameOverSound = new Audio('gameover.mp3');
let moveSound = new Audio('move.mp3');
let musicsound = new Audio('music.mp3');

let speed = 5;
let lastPaint = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
food = { x: 3, y: 5 }
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaint) / 1000 < 1 / speed) {
        return;
    }
    lastPaint = ctime;
    gameEngine();
}

function gameEngine() {

if(isCollide(snakeArr)){
    gameOverSound.play();
    musicsound.play();
    inputDir={x:0,y:0};
    alert("GameOver");
    snakeArr=[{x:13,y:15}];
    score=0;
}

function isCollide(snake){
  for(let i=1;i<snakeArr.length;i++){
    if(snake[i].x===snake[0].x&&snake[i].y===snake[0].y){
        return true;
    }
  }
  if(snake[0].x>=18||snake[0].x<=0||snake[0].y>=18||snake[0].y<=0){
    return true;
  }

}

if(snakeArr[0].y===food.y&&snakeArr[0].x===food.x){
    snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y})
    let a=2,b=16;
    food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
}

for(let i=snakeArr.length-2;i>=0;i--){
    snakeArr[i+1]={...snakeArr[i]}
}
snakeArr[0].x+=inputDir.x;
snakeArr[0].y+=inputDir.y;

    //display snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElem = document.createElement('div');
        snakeElem.style.gridRowStart = e.y;
        snakeElem.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElem.classList.add('head')
        }
        else {
            snakeElem.classList.add('snake')
        }
        board.appendChild(snakeElem)
    });

    foodElem = document.createElement('div');
    foodElem.style.gridRowStart = food.y;
    foodElem.style.gridColumnStart = food.x;
    foodElem.classList.add('food')
    board.appendChild(foodElem)
}





window.requestAnimationFrame(main)
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 }
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrayUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrayDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrayLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrayRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})