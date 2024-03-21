const input=document.getElementById("input");
const toF=document.getElementById("toF");
const toC=document.getElementById("toC");
const p=document.getElementById("des");

let answer;

function calculate(){

if(toF.checked){
    answer=Number(input.value);
    answer=(9/5*answer)+32;
    p.textContent=`Fahrenhiet is ${answer.toFixed(1)} °F`;
}
else if(toC.checked){
    answer=Number(input.value);
    answer=5/9*(answer-32);
    p.textContent=`Celcius is ${answer.toFixed(1)}°C `;
}
else{
    p.textContent="Choose a method";
}
}