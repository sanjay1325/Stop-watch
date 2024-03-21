const spanJs=document.querySelector(".span")
const copyJs=document.querySelector(".copybt")
const lengthJs=document.querySelector(".length")
const lowerJs=document.querySelector(".lower")
const upperJs=document.querySelector(".upper")
const numbersJs=document.querySelector(".numbers")
const charJs=document.querySelector(".char")
const GenerateJs=document.querySelector(".generatebt")


const upperLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const characters='!@#$%^&*()';




GenerateJs.addEventListener('click',()=>{
let flag=false;
let allowedchars="";
let password="";

const len=lengthJs.value;


if(upperJs.checked){
   allowedchars+=upperLetters; 
   flag=true;
   
}
if(lowerJs.checked){
    allowedchars+=lowerLetters;
    flag=true;
}
if(numbersJs.checked){
    allowedchars+=numbers;
    flag=true;
}
if(charJs.checked){
    allowedchars+=characters;
    flag=true;
}

if(flag===false){
    alert("Select constraints");
}
for(let i=1;i<=len;i++){
    password=password+allowedchars[Math.floor(Math.random()*allowedchars.length)];
}
spanJs.innerText=password;

})

copyJs.addEventListener('click',()=>{
    const textarea=document.createElement("textarea");
    const passkey=spanJs.innerText;

    if(!passkey){
        return;
    }

    textarea.value=passkey;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied');


})








// const passwordlength=13;
// const lowerCase=true;
// const upperCase=true;
// const numbers=true;
// const symbols=true;

// const key=passwordgenerator(passwordlength,lowerCase,upperCase,numbers,symbols);
// console.log(`The password: ${key}`);

// function passwordgenerator(length,lowerCase,upperCase,numbers,symbols){
 
// let lowerChars="abcdefghijklmnopqrstuvwxyz";
// let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let s="!@#$%^&*()<>?/";
// let n="1234567890";

// let allowedchars="";
// let password="";

// allowedchars+=lowerCase?lowerChars:"";
// allowedchars+=upperCase?upperChars:"";
// allowedchars+=numbers?n:"";
// allowedchars+=symbols?s:"";


// if(length<1){
//     return `(The password must contain atleast one characters!!!)`;
// }
// else if(allowedchars.length===0){
//     return `(The password should contain any of the parameters)`;
// }
// else{
// for(let i=0;i<length;i++){
//     let random=Math.floor(Math.random()*allowedchars.length);
//     password+=allowedchars[random];
    
// }
// return password;
// }

// }