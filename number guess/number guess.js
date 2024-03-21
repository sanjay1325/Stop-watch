let answer;
let guess;
let min=1;
let max=200;
let found=false;
answer=Math.floor(Math.random()*(max-min)+min);

while(!found){
guess=window.prompt(`Enter a number`);
guess=Number(guess);

if(isNaN(guess)){
    window.alert("please enter a valid number");
}
else if(guess<min||guess>max){
    window.alert("Please give a number within the number range of 1 to 200");
}
else{
     if(guess<answer){
        window.alert("You are low to answer");
    }
    else if(guess>answer){
        window.alert("You are high to answer");
    }
    else{
        window.alert(`yess!! you are right the answer is ${answer}`);
        found=true;
    }
}


}