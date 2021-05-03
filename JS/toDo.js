const toDo__box = document.querySelector(".toDo__box");
const toDo__text = document.querySelector(".toDo__text");
const toDo__category = document.querySelector(".category__text");
const dropdownIcon = document.querySelector(".fa-caret-down");
const toDo__category__list = document.querySelector(".category__text__list");
const item = document.querySelectorAll(".category__text__list__item");
const menuIcon = document.querySelector(".fa-ellipsis-h");
const menuList = document.querySelector(".menu__list");
const menuItem = document.querySelectorAll(".menu__list__item");

function handleClick() {
  toDo__box.classList.toggle("fadeOut");
  toDo__box.classList.toggle("fadeIn");
}
function handleClickCategory(){
    toDo__category__list.classList.toggle("dropbox");
}
function handleClickedItem(event){
    const value = event.target.innerText;
    toDo__category.innerText = value;
}
function handleMenu(){
    menuList.classList.toggle("dropbox");
}

function init() {
  toDo__text.addEventListener("click", handleClick);
  toDo__category.addEventListener("click",handleClickCategory);
  dropdownIcon.addEventListener("click", handleClickCategory);
  item[0].addEventListener("click", handleClickedItem);
  item[1].addEventListener("click", handleClickedItem);
  menuIcon.addEventListener("click", handleMenu);
}

init();
