const clock = document.querySelector(".clock");


const clockLive = () => {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  clock.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

function init() {
  clockLive();
  setInterval(clockLive, 60000);
}

init();
