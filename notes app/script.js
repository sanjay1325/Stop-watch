
const addbt=document.querySelector(".add");

const datas=JSON.parse(localStorage.getItem(("texts")));

if (datas){
    
    datas.forEach(data => {
        add(data);
    });

}


function add(data=''){
    const notes=document.createElement("div");
    notes.classList.add("notes");

    notes.innerHTML=`
    <div class="tools">
        <button class="edit">✏️</button>
        <button class="delete">🗑️</button>
    </div>
   <div class="main ${data?'':'hidden'}"></div>
   <textarea class="text ${data?'hidden':''}"></textarea>`


document.body.append(notes);

   
const editbt=notes.querySelector(".edit");
const deletebt=notes.querySelector(".delete");
const main=notes.querySelector(".main");
const textarea=notes.querySelector(".text");
textarea.value=data;
main.innerHTML=marked(data);


editbt.addEventListener('click',()=>{
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
})
textarea.addEventListener('input',(event)=>{
  
    const {value}= event.target;

    main.innerHTML=marked(value);
    storeLS();
})

deletebt.addEventListener('click',()=>{
    notes.remove();
    storeLS();
})


}



addbt.addEventListener('click',()=>{
     
    add();
    
//     const notes=document.createElement("div");
//     notes.classList.add("notes");

//     notes.innerHTML=`
//     <div class="tools">
//         <button class="edit">✏️</button>
//         <button class="delete">🗑️</button>
//     </div>
//    <div class="main hidden"></div>
//    <textarea class="text"></textarea>`


// document.body.append(notes);
// storeLS();
   
// const editbt=notes.querySelector(".edit");
// const deletebt=notes.querySelector(".delete");
// const main=notes.querySelector(".main");
// const textarea=notes.querySelector(".text");


// editbt.addEventListener('click',()=>{
//     main.classList.toggle("hidden");
//     textarea.classList.toggle("hidden");
// })
// textarea.addEventListener('input',(event)=>{
  
//     const {value}= event.target;

//     main.innerHTML=marked(value);

// })

// deletebt.addEventListener('click',()=>{
//     notes.remove();
// })

})

function storeLS(){
    const datas=document.querySelectorAll("textarea");
    const texts=[];

    datas.forEach(data => {
        texts.push(data.value);
    });

    localStorage.setItem("texts",JSON.stringify(texts));
}

