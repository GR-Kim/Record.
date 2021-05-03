const stopWatch__btn = document.querySelector(".stopWatch__btn");
const stopWatch__current = document.querySelector(".stopWatch__current");

let time = 0;

const stopwatch = () => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  stopWatch__current.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  time++;
};

function init() {
  let stopWatchLive;
  stopWatch__btn.addEventListener("dblclick", (event) => {
    
    if (event.target.classList.contains("clicked")) {
      clearInterval(stopWatchLive);
      time = 0;
      stopWatch__current.innerText = "00:00";
    } else {
      stopWatchLive = setInterval(stopwatch, 1000);
    }
    event.target.classList.toggle("clicked");
    stopWatch__current.classList.toggle("show");
    stopWatch__btn.style.backgroundColor ="#ff0000";
  });

  stopWatch__btn.addEventListener("click", (event) => {
    let btnStyle = stopWatch__btn.style.backgroundColor;
    if(event.target.classList.contains("clicked")&& btnStyle === "rgb(255, 0, 0)"){
      stopWatch__btn.style.backgroundColor = "#fdca40";
      clearInterval(stopWatchLive);
    }else if(event.target.classList.contains("clicked") && btnStyle === "rgb(253, 202, 64)"){
      stopWatch__btn.style.backgroundColor ="#ff0000";
      stopWatchLive = setInterval(stopwatch, 1000);
    }
  });
}

init();
