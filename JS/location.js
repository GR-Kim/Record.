const info__location = document.querySelector(".info__location");
const info__weather = document.querySelector(".info__weather");
const API_KEY = "e1d541d8ade3803c4aacf52adfbd786e";


function paintInfo(json){
    const temp = document.createElement("span");
    temp.className = "info__weather__temp";
    temp.innerText = `${Math.floor(json.main.temp)}°`;
    const icon = new Image();
    icon.className = "info__weather__icon"
    icon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}.png`;
    info__weather.append(icon);
    info__weather.append(temp);
    info__location.innerText = json.name;
    
    
}

function loadWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      ).then(response => response.json()).then(json => paintInfo(json));
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coords = {
    lat,
    lon,
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  loadWeather(coords.lat, coords.lon);
}

function handleGeoError() {
  info__location.innerText = "Can't Access";
}
function askForCoords() {
    if(localStorage.getItem("coords")){
        const coords = JSON.parse(localStorage.getItem("coords"));
        loadWeather(coords.lat, coords.lon);
    }else{
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    }
  
}

function init() {
  askForCoords();
}

init();
