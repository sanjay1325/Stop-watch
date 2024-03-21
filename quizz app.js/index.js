const quizData=[
    {
      question:"What does HTML stands for?",
      a:"Hypertext Markup Language",
      b:"Hyperactive Text Material",
      c:"High Technique Machine Learning",
      d:"Cascading Style Sheet",
      answer:"a",  
    },
    {
        question:"Who invented HTML?",
        a:"Tim Berners-Lee",
        b:"Hakon Wium Lie",
        c:"Sanjay",
        d:"Charles babbage",
        answer:"a",  
    },{
        question:"What does CSS stands for?",
        a:"Computer System",
        b:"Computer Service Center",
        c:"Cascading Style Sheet",
        d:"Computer Style Sheet",
        answer:"c",  
    },{
        question:"Who invented CSS?",
        a:"Tim Berners-Lee",
        b:"Hakon Wium Lie",
        c:"Sanjay",
        d:"Charles babbage",
        answer:"b",  
    },{
        question:"What does JS stands for?",
        a:"Jump Syntax",
        b:"Java Syntax",
        c:"Jumbo Script",
        d:"Java Script",
        answer:"d",    
    }
]
let score=0;
const conatiner=document.querySelector(".quiz-container");
const question=document.querySelector(".question");
const button=document.querySelector(".submit");

const choice1=document.getElementById("choice1");
const choice2=document.getElementById("choice2");
const choice3=document.getElementById("choice3");
const choice4=document.getElementById("choice4");

let questionNumber=0;
displayQuestion();

function displayQuestion(){
removeChoices();
const questionData=quizData[questionNumber];

question.textContent=questionData.question;
choice1.textContent=questionData.a;
choice2.textContent=questionData.b;
choice3.textContent=questionData.c;
choice4.textContent=questionData.d;


}

function checkOption(){
    const choices=document.querySelectorAll(".choices");
    let check=undefined;

    choices.forEach((choice) => {
        if(choice.checked){
            check=choice.id;
        }
    });
    console.log(check);
    return check;
}
function removeChoices(){
    const choices=document.querySelectorAll(".choices");
    choices.forEach((choice) => {
        choice.checked=false;
        }
)}


button.addEventListener("click",()=>{
    const checking=checkOption();
     if(checking){
        if(checking==quizData[questionNumber].answer){
            score++;
        }
        questionNumber++;
        if(questionNumber<quizData.length){
        displayQuestion();
        }
        else{
           conatiner.innerHTML=`<p>You Scored ${score} correclty out of ${quizData.length} questions </p> <button onclick='reload()'>re-attempt</button>`
        }}
     }
    
)

function reload(){
    location.reload();
}
