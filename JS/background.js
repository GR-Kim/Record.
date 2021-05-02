const body = document.querySelector("body");

const IMG_NUMBER = 12;

function paintBackground(randomNumber){
    const image = new Image();
    image.src = `./background/${randomNumber+1}.jpg`;
    image.className = "background";
    body.append(image);

}
const genRandom = () => Math.floor(Math.random()*IMG_NUMBER);

function init(){
    paintBackground(genRandom());
}

init();