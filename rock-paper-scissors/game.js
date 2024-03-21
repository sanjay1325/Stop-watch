const moves= ["rock","paper","scissor"];
 const playermove=document.getElementById("playermove");
 const computermove=document.getElementById("computermove");
 const result=document.getElementById("result");
 


 function playgame(usermove){
    let conclusion="";
    gamemove=moves[Math.floor(Math.random()*3)];
    if(gamemove===usermove){
        conclusion="Its a tie";
    }
    else{

    switch(usermove){
        case "rock":
            conclusion=gamemove==="scissor"?"YOU WIN!!!":"YOU LOST...";
            break;
        case "paper":
            conclusion=gamemove==="rock"?"YOU WIN!!!":"YOU LOST...";
            break;
        case "scissor":
             conclusion=gamemove==="paper"?"YOU WIN!!!":"YOU LOST...";
             break;
        
    }}


    playermove.textContent=`Playermove:${usermove}`;
    computermove.textContent=`Computermove:${gamemove}`;
    result.textContent=`${conclusion}`;

    result.classList.remove("win","lose");
    
    if(conclusion==="YOU WIN!!!"){
      result.classList.add("win");
    }
    else if(conclusion==="YOU LOST..."){
        result.classList.add("lose");
    }
 }
