const pomodoro__btn = document.querySelector(".pomodoro__btn");
const promodo__timer = document.querySelector(".promodo__timer");

let time = 25 * 60;

const timer = () => {
    if(pomodoro__btn.classList.contains("clicked") && time == 0){
        return promodo__timer.innerText = "Time over";
        
    }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  promodo__timer.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  time--;
};

function init() {
  pomodoro__btn.addEventListener("click", (event) => {
    event.target.classList.toggle("clicked");
    promodo__timer.classList.toggle("show");
    time = 25 * 60;
  });
  setInterval(timer, 1000);
}

init();
