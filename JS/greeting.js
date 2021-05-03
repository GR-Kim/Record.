const nameInput = document.querySelector(".nameInput");
const usernameForm = document.querySelector(".usernameForm");
const main = document.querySelector("main");

function paintGreeting(currentUser){
    const greeting = document.createElement("h2");
    greeting.className = "greeting";
    greeting.innerText = `Hello!! ${currentUser} 👋🏻`;
    const edit = document.createElement("h2");
    main.append(greeting);
    
}

function handleSubmit(event){
    event.preventDefault();
    if (nameInput.value !== ""){
        const currentValue = nameInput.value;
        localStorage.setItem("currentUser", currentValue);
        nameInput.vlaue = "";
        usernameForm.classList= "none";
        paintGreeting(currentValue);
        
        
        
    }
    
  };

function init(){
    const currentUser = localStorage.getItem("currentUser");
    usernameForm.addEventListener("submit", handleSubmit);
    if(currentUser){
        usernameForm.classList= "none";
        paintGreeting(currentUser);
    }
    
    
}

init();