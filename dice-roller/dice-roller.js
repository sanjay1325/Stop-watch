const input=document.getElementById("input");
const result=document.getElementById("dice-result");
const image=document.getElementById("dice-image");

let values=[];
let images=[];


function rolldice(){
let values=[];
let images=[];
for(let i=1;i<=input.value;i++){
  const value=Math.floor((Math.random()*6)+1)
  values.push(value);
  images.push(`<img src="images/${value}.png">`)
}
result.textContent=`dice:${values.join(", ")}`;
image.innerHTML=images.join(" ");

}