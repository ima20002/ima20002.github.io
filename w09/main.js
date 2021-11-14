document.getElementById("b1").addEventListener("click", dialogOne)
document.getElementById("b2").addEventListener("click", dialogTwo)
document.getElementById("b3").addEventListener("click", dialogThree)
document.getElementById("b4").addEventListener("click", controlWindow)
document.getElementById("b5").addEventListener("click", timingFun)

function dialogOne() {
    window.alert('Hello');
}

function dialogTwo() {
    window.confirm('Do you wish to continue?');
}

function dialogThree() {
    window.prompt('Please enter your name:');
}

function controlWindow() {
    constPopup = window.open('https://youtube.com','YouTube','width=800,height=800,resizable=yes');
}

function timingFun() {
    window.setTimeout( () => alert("Time's Up!"), 3000);
}

//Animation
// const squareElement = document.getElementById('square');
// let angle = 0;
// setInterval( () => {    
//     angle = (angle + 2) % 360;    
//     squareElement.style.transform = `rotate(${angle}deg)`
// }, 1000/60);

//requestAnimationFrame
const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

////Canvas
const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
context.fillStyle = "blue"; // a blue fill color 
context.strokeStyle = "gray"; // a gray stroke color
context.lineWidth = 4;

context.fillRect(10,10,100,50);
context.strokeRect(10,100,100,50);

//drawing lines
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

//an arc
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();

//write a text
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);