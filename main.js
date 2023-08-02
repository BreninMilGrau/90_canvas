const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");

const roverWidth = 100;
const roverHeight = 90;

var roverX = 10;
var roverY= 10;

const borderRight = canvas.width - roverWidth;
const borderBottom = canvas.height - roverHeight;

const backgroungImage = "mars.jpg";
const roverImage = "rover.png";

var backgroungImgTag, roverImgTag;

function add() {
    backgroungImgTag = new Image();
    backgroungImgTag.src = backgroungImage;
    backgroungImgTag.onload = uploadBackground;

    roverImgTag = new Image();
    roverImgTag.src = roverImage;
    roverImgTag.onload = uploadRover
}

function uploadBackground() {
    ctx.drawImage(backgroungImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", keyDown);
function keyDown(e){
    const  keyPressed = e.keyCode;
    const passo = 10;
    console.log(keyPressed);
    }

    //Esquerda
    if(keyPressed == 37){
        if(roverX > 0){
            roverMove(-passo, 0);
            }

    } else if(keyPressed == 38){
        if(roverY > 0){
            roverMove(0, -passo);
        }

    } else if(keyPressed == 39){
        if(roverX > borderRight){
            roverMove(passo, 0);
            }

    } else if(keyPressed == 39){
        if(roverX > borderRight){
            roverMove(passo, 0);
    }

    } else if(keyPressed == 40){
        if(roverY > borderBottom){
            roverMove(0, passo);
    }
}

function roverMove(x, y){
    roverX += x;
    roverY += y;

    uploadBackground();
    uploadRover();
}