const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
let addJs=document.getElementById("add");
let subJs=document.getElementById("sub");
let spanJs=document.getElementById("span");
const colorJs=document.getElementById("color");
let deleteJs=document.getElementById("delete");

let size=15;
let color='black';
let triggered=false;

canvas.addEventListener("mousedown",(e)=>{
triggered=true;
let x=e.offsetX;
let y=e.offsetY;
})

canvas.addEventListener("mouseup",()=>{
    triggered=false;
    x=undefined;
    y=undefined;


})

canvas.addEventListener("mousemove",(e)=>{

    if(triggered){
    let x2=e.offsetX;
    let y2=e.offsetY;
    drawCircle(x2,y2);
    drawLine(x,y,x2,y2);
    x=x2;
    y=y2;

    }
    
})

function drawCircle(x2,y2){
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fill();
    
}

function drawLine(x,y,x2,y2){
    ctx.strokeStyle=color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.lineWidth=size;
    ctx.stroke();
}

addJs.addEventListener('click',()=>{
   
    size+=5;
    if(size>50){
        size=50;
    }
   displaySpan();
})

subJs.addEventListener('click',()=>{
    size=size-5;
    if(size<5){
        size=5;
    }
    displaySpan(); 
})

function displaySpan(){
    spanJs.innerHTML=size;
}

colorJs.addEventListener('change',(e)=>{
    color=e.target.value;
})

deleteJs.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})