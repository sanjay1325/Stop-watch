
const birthday=`13 Dec 2024`;

const dayjs=document.getElementById("days");
const hourjs=document.getElementById("hours");
const minjs=document.getElementById("mins");
const secjs=document.getElementById("sec");



function countdown(){
    const currentdate=new Date();
    const bday=new Date(birthday);
    const remaining=bday-currentdate;


const seconds=remaining/1000;

const days=Math.floor(seconds/3600/24);
const hours=Math.floor(seconds/3600)%24;
const minutes=Math.floor(seconds/60)%60;
const sec=Math.floor(seconds%60);

dayjs.textContent=days;
hourjs.textContent=hours;
minjs.textContent=minutes;
secjs.textContent=sec;

}

setInterval(countdown,1000);


