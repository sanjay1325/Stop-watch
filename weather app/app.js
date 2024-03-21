
const form=document.querySelector(".weather-form");
const input=document.querySelector(".input");
const details=document.querySelector(".details");
const keyapi="8d6bafb9ef43d74abe844b4a6d763ecc";


form.addEventListener("submit",async event=>{
    

    event.preventDefault();

    const country=input.value;

    if(country){
      try{
        
        const data=await getweatherdetails(country);
        
        displayweather(data);
        
        
      }
      catch(error){
        console.error(error);
        displayerror("error");
      }

    }
    else{
        displayerror("please enter country");
    }


    
    
})

function displayweather(data){

   const{name:city,
        main:{temp,humidity},
        weather:[{description,id}]}=data
        
  details.textContent="";
  details.style.display="block";

  const country=document.createElement("h1");
  const tempdisplay =document.createElement("p");
  const humidisplay=document.createElement("p");
  const desdisplay=document.createElement("p");
  const weatheremoji=document.createElement("p");

  country.textContent=city;
  tempdisplay.textContent=`${temp} kelvin`;
  humidisplay.textContent=`Humidity:${humidity}%`;
  desdisplay.textContent=description;
  weatheremoji.textContent=getemoji(id);

  
  
  

  
  country.classList.add("country");
  tempdisplay.classList.add("temp-detail");
  humidisplay.classList.add("humidity-detail");
  desdisplay.classList.add("temp-des");
  weatheremoji.classList.add("temp-img");
  


  details.appendChild(country);
  details.appendChild(tempdisplay);
  details.appendChild(humidisplay);
  details.appendChild(desdisplay);
  details.appendChild(weatheremoji);
  
  

}
  
function getemoji(id){

switch(true){
  case(id>=200 && id<300):
  return " ⛈️";
  case(id>=300 && id<400):
  return " 🌦️";
  case(id>=500 && id<600):
  return " 🌧️";
  case(id>=600 && id<700):
  return " ❄️";
  case(id>=700 && id<800):
  return "💨";
  case(id===800):
  return "☀️";
  case(id>=801 && id<810):
  return "☁️";
  default:
    return "❓";
  

}

}



async function getweatherdetails(country){
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${keyapi}`;

  const response= await fetch(url);
  console.log(response);
  if(!response){
    throw new Error("not proper region given");
  }
  return await response.json();
}






function displayerror(message){

    const errormsg=document.createElement("p");
    errormsg.textContent=message;
    errormsg.classList.add("error-msg");
    details.textContent="";
    details.style.display="flex";
    details.appendChild(errormsg);
}