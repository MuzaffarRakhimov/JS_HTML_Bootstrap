

const btn = document.querySelector(".menu");
const navbar = document.querySelector(".navbarContext");
const mode = document.querySelector("#mode");
const nav = document.querySelector(".navbar");
const body = document.body;
const text = document.querySelector(".text");
const input = document.querySelector(".input");
const button = document.querySelector("#sendBtn");
const modal = document.querySelector(".modal");
const closeX = document.querySelector("#closeX");
const close = document.querySelector("#close");
const save = document.querySelector("#save");

btn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
mode.addEventListener("input", () => {
  nav.classList.toggle("navDark");
  body.classList.toggle("navDark");
});
//onInput event

input.addEventListener("change", (evn) => {
  var value = evn.target.value;
  text.innerHTML = value;
});
button.addEventListener("click", () => {
  modal.classList.add("showModal");
});

closeX.addEventListener("click", () => {
  modal.classList.remove("showModal");
});
close.addEventListener("click", () => {
  modal.classList.remove("showModal");
});
save.addEventListener("click", () => {
  modal.classList.remove("showModal");
});

const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const resultBtn = document.querySelector("#resultBtn");
const resultTxt = document.querySelector("#resultTxt");
const select = document.querySelector("#select");

const basket = [];

value1.addEventListener("change", (e) => (basket[0] = e.target.value));
value2.addEventListener("change", (e) => (basket[2] = e.target.value));
select.addEventListener("change", () => (basket[1] = select.value));
resultBtn.addEventListener("click", () => {
  if (basket[1] === "1") {
    resultTxt.innerHTML = +basket[0] + +basket[2];
  }
  if (basket[1] === "2") {
    resultTxt.innerHTML = +basket[0] - +basket[2];
  }
  if (basket[1] === "3") {
    resultTxt.innerHTML = +basket[0] * +basket[2];
  }
  if (basket[1] === "4") {
    resultTxt.innerHTML = +basket[0] / +basket[2];
  }
});

const colorPicker = document.querySelector("#colorPicker");
const colorZone = document.querySelector(".colorZone");

colorPicker.addEventListener("change", (e) => getColor(e.target.value));

function getColor(evn) {
  colorZone.style.backgroundColor = evn;
}

const imgPicker = document.querySelector("#imgPicker");
const imgZone = document.querySelector(".imgZone");

imgPicker.addEventListener("change", (e) => getImg(e.target.value));

function getImg(e) {
  if (e === "nature") {
    imgZone.src =
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  }
  if (e === "cars") {
    imgZone.src =
      "https://www.detailxperts.net/wp-content/uploads/2018/03/Classic-cars.png";
  }
  if (e === "animals") {
    imgZone.src =
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg";
  }
}

//create dynamic elements
const newCards = document.querySelector("#newCards");
const addCards = document.querySelector("#addCards");
const cardsWrapper = document.querySelector("#cardsWrapper");

const newLink = document.createElement("a");
newLink.href = "https://kun.uz/";
newLink.innerHTML = "Press to enter Kun.uz";
cardsWrapper.prepend(newLink);

addCards.addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.innerHTML = "Hello Js";
  newElement.style.backgroundColor = "red";
  newElement.classList.add("box");
  newCards.appendChild(newElement);
});

///scroll

const scrollCard = document.querySelector(".scrollCard");

// console.log(document.body.clientHeight) elementni balandligini beradi
// console.log(scrollCard.scrollTo(0,300));  elementni belgilangan masofada surib beradi
const toEnd = function () {
  window.scrollTo(0, 1829);
};
console.log(document.body.clientHeight);

scrollCard.addEventListener("scroll", () => {
  const top = scrollCard.scrollTop;
  if (top > 300) {
    scrollCard.style.backgroundColor = "skyblue";
  }
  if (top > 600) {
    scrollCard.style.backgroundColor = "yellowgreen";
  }
  if (top > 900) {
    scrollCard.style.backgroundColor = "pink";
  }
  if (top > 1200) {
    scrollCard.style.backgroundColor = "salmon";
  }
});
