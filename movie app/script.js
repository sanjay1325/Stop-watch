const UR="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH="https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const inputJs=document.querySelector(".input");
const formJs=document.querySelector("form");
const mainJs=document.querySelector("main");

displayMovies(UR);

function showMovies(Datas){
   

    Datas.forEach((Data) => {
        // console.log(Data);
       
        const movieJs=document.createElement("div");
       
        movieJs.classList.add('movie');
       
        movieJs.innerHTML=`
        
        <img src="${IMGPATH+Data.poster_path}" alt="⏳movie-img">
        <div class="movie-info">
            <h3>${Data.title}</h3>
            <span class="${rating(Data.vote_average)}">${Data.vote_average.toFixed(1)}</span>
           
        </div>
        <div class="overview"><h2>Overview</h2>${Data.overview}</div>
    
        `
        
         
 
        mainJs.appendChild(movieJs);
        
        
    });
    
        
        

}
async function displayMovies(URL){
    mainJs.innerHTML='';
   
    const response=await fetch(URL);
    const responseDatas=await response.json();
    
    const Datas=responseDatas.results;

    console.log(Datas);
    showMovies(Datas);

        
        
      

}
function rating(vote){
    if(vote>=7){
        return "good";
    }
    else if(vote>=5){
        return "average";
    }
    else{
        return "bad";
    }
    
}

formJs.addEventListener('submit',(e)=>{
   e.preventDefault();

  const search=inputJs.value;
  inputJs.value=``;
  
  const searchURL=SEARCHAPI+search;

  displayMovies(searchURL);

})

