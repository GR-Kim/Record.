const nameInput = document.querySelector(".name");
const usernameForm = document.querySelector(".usernameForm");
const main =document.querySelector("main");

function paintGreeting(currentUser){
    const greeting = document.createElement("h2");
    greeting.className = "greeting";
    greeting.innerText = `Hello ${currentUser} 👋🏻`;
    main.append(greeting);
    
}

function handleSubmit(event){
    event.preventDefault();
    if (nameInput.value !== ""){
        const currentValue = nameInput.value;
        localStorage.setItem("currentUser", currentValue);
        nameInput.vlaue = "";
        usernameForm.classList= "none";
        
    }
    
  };

function init(){
    const currentUser = localStorage.getItem("currentUser");
    usernameForm.addEventListener("submit", handleSubmit);
    if(currentUser){
        paintGreeting(currentUser);
    }
    
    
}

init();