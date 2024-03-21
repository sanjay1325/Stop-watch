const meals=document.getElementById("meals");
const container=document.getElementById("container"); 
const input=document.getElementById("inp");
const srchbt=document.getElementById("srchbt");



fetchFav();
getRandomMeal();



async function getRandomMeal(){
const response= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
const RandomMealData=await response.json();
const RandomMeal=RandomMealData.meals[0];
//console.log(RandomMeal);

addMeal(RandomMeal);
}

async function getMealbyId(Id){
   const response=await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Id);
   const RandomData=await response.json();
   const mealData=RandomData.meals[0];
   return mealData;
}

async function getMealBySearch(search){
const response=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search);
const RandomData=await response.json();
const mealData=RandomData.meals;
return mealData;
}

function addMeal(data){

const meal=document.createElement("div");
meal.classList.add("meal");
//console.log(data);

meal.innerHTML=`
    <div class="meal-header">
    <spam class="random">Random recipe</spam>
     
       
        <img src="${data.strMealThumb}" alt="${data.strMeal}">
    </div>
    <div class="meal-body">
        <spam>${data.strMeal}</spam>
        <button class="fav-bt"><i class="fa-solid fa-heart"></i></button>
    </div>

`;

const heartbt=meal.querySelector(".meal-body .fav-bt");
heartbt.addEventListener("click",()=>{
    
    

if(heartbt.classList.contains("active")){
    removeLS(data.idMeal);
    heartbt.classList.remove("active");
}
else{
    addIdLS(data.idMeal);
    heartbt.classList.add("active");
}

fetchFav();
})


meals.appendChild(meal);

}

function addIdLS(MealId){
const mealIds=getMealIds();

localStorage.setItem("mealIds",JSON.stringify([...mealIds,MealId]));

}
function removeLS(MealId){
    const mealIds=getMealIds();
  localStorage.setItem("mealIds",JSON.stringify(mealIds.filter((id)=> id!==MealId)));
}



function getMealIds(){
    const mealIds=JSON.parse(localStorage.getItem("mealIds"));
    return mealIds === null ? [] :mealIds;
}


async function fetchFav(){
    container.innerHTML='';
    const mealIds=getMealIds();


   
    for(let i=0;i<mealIds.length;i++){
        const mealId=mealIds[i];
        
         mealData=await getMealbyId(mealId);
        addMealFav(mealData);
        
    }
    console.log(meals);
}



function addMealFav(Data){
   
    const list=document.createElement("li");
    
    list.innerHTML=`<img src="${Data.strMealThumb}" alt="${Data.strMeal}">
    <spam>${Data.strMeal}</spam>
    <button class="delete">❌</button>`;

    const deletebt=list.querySelector(".delete");
    
    
    deletebt.addEventListener('click',(event)=>{
        removeLS(Data.idMeal);
        fetchFav();

    })
    
    container.appendChild(list);
    }
    srchbt.addEventListener('click', async () => {
        const meal = meals.querySelector(".meal");
        meal.classList.add("meal");
        meal.innerHTML = '';
    
        const searched = input.value;
        const datas = await getMealBySearch(searched);
    
        // Check if datas is not empty and has at least one element
        if (datas && datas.length > 0) {
            const data = datas[1];  // Access the first element directly
    
            meal.innerHTML += `
                <div class="meal-header">
                    <spam class="random">Random recipe</spam>
                    <img src="${data.strMealThumb}" alt="${data.strMeal}">
                </div>
                <div class="meal-body">
                    <spam>${data.strMeal}</spam>
                    <button class="fav-bt"><i class="fa-solid fa-heart"></i></button>
                </div>
            `;
    
            const heartbt = meal.querySelector(".meal-body .fav-bt");
            heartbt.addEventListener("click", () => {
                if (heartbt.classList.contains("active")) {
                    removeLS(data.idMeal);
                    heartbt.classList.remove("active");
                } else {
                    addIdLS(data.idMeal);
                    heartbt.classList.add("active");
                }
    
                fetchFav();
            });
    
            meals.appendChild(meal);
        }
    });
    


    
