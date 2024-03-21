

async function search(){
    try{
      const name=document.getElementById("input").value.toLowerCase();
      const pokemonimage1=document.getElementById("image1");
      const pokemonimage2=document.getElementById("image2");


      const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      
    
      if(!response.ok){
        throw new Error("Could not fetch");
      }
      const data= await response.json();
      console.log(data);

      const image1=data.sprites.front_default;
      const image2=data.sprites.back_default;
      pokemonimage1.src=image1;
      pokemonimage2.src=image2;
      pokemonimage1.style="display:flex";
      pokemonimage2.style="display:flex";
      pokemonimage1.style="align-content: center;";
      pokemonimage2.style="align-content: center;";


      
    }
    catch(error){
        console.log(error);
    }
}