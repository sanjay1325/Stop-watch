const formJs=document.getElementById("form");
const inputJs=document.querySelector(".input");
const todosJs=document.querySelector(".todos")

const datas=JSON.parse(localStorage.getItem("datas"));
if(datas){
datas.forEach(data => {
    display(data);
});
}




function display(data){
    const listJs=document.createElement("li"); 
   
    
    const inputText=inputJs.value;


       
    listJs.innerText=inputText;
    if(data){
        listJs.innerText=data.text;
    }
    if(data&&data.completed){
        listJs.classList.add("completed");
    }
     

    listJs.addEventListener('click',(e)=>{
       listJs.classList.toggle("completed");
       loadLS();
    })
    listJs.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        listJs.remove();
        loadLS();
    })


   
   
   
    todosJs.appendChild(listJs);
    inputJs.value = '';
    loadLS();


}

formJs.addEventListener('submit',(e)=>{

    e.preventDefault();
     display();  
})

function loadLS(){
    const datas= document.querySelectorAll("li");
    const text=[];
     
    datas.forEach(data => {
        text.push({
            text:data.innerText,
            completed:data.classList.contains("completed")
        })

        
    });
    localStorage.setItem("datas",JSON.stringify(text));
}

