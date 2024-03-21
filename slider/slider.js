const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let interval=null;
console.log(slides);


document.addEventListener("DOMContentLoaded",initialise);


function initialise(){
if(slides.length>0){
slides[slideIndex].classList.add("display");
interval=setInterval(slidenext,5000);
}

}


function showslide(slide){
    
  
    if(slide >= slides.length){
        slideIndex=0;
    }
    else if(slide < 0){
        slideIndex=slides.length-1;
    }
    
    console.log(slideIndex);
   

slides.forEach(slide=>{
    slide.classList.remove("display");
})

slides[slideIndex].classList.add("display");
}



function slidenext(){
    slideIndex++;
    console.log(slideIndex);
    showslide(slideIndex);
}

function slideprev(){
    slideIndex--;
    clearInterval(interval);
    showslide(slideIndex);
}