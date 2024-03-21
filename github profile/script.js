const formjs=document.querySelector("form");
const inputjs=document.querySelector("input");
const mainjs=document.querySelector("main");





const API="https://api.github.com/users/";

async function fetchDetails(user){
 
    const respData=await fetch(API+user);
    const resp=await respData.json();

    const data=resp;
    console.log(data);
    mainjs.innerHTML=``;
    displayContainer(data);
   

}

async function fetchRepos(user){
    const respData=await fetch(API+user+"/repos");
    const resp=await respData.json();
    const repos=resp;

    displayRepos(repos);
}

function displayRepos(repos){
const reposjs=document.querySelector(".repos");  
    
    repos.slice(0,6).forEach((repo)=> {
    const a=document.createElement("a");
    a.classList.add("links");
    a.text=repo.name;
    a.target="_blank";
    a.href=repo.html_url;

    reposjs.appendChild(a);

    });
}

function displayContainer(data){

  
    
const container=document.createElement("div");
container.classList.add("container");

container.innerHTML=`
<div class="profile">
<img class="avatar" src="${data.avatar_url}">
</div>
<div class="card">
<h2>${data.name}</h2>
<p>${data.bio}</p>
<ul class="list">
<li><strong>Followers:</strong>${data.followers}</li>
<li><strong>Following:</strong>${data.following}</li>
<li><strong>Repos:</strong>${data.public_repos}</li>
</ul>
<div class="repos"> 
    </div>
<div>
`;

mainjs.appendChild(container);

}




formjs.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user=inputjs.value;
    
    fetchDetails(user);
    fetchRepos(user);

})


