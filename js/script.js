const url = "https://raddythebrand.github.io/apex-legends/data.json";
const loader = document.querySelector("#loading");
const loaderFrame = document.querySelector("#loading__frame");

const legendsList = document.querySelector("#legends");
const listFragment = document.createDocumentFragment();

const legend = document.querySelector("#legend");

async function getLegends() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (response) {
      loader.style.display = "none";
    }
    listLegends(data);
    viewDetail(data[0]);
    // GSAP Animation
    const tl = gsap.timeline();
    tl.to(".legend__nav", { y: 0, duration: 0.6, opacity: 1 });
    tl.to("#legend", { y: 0, duration: 0.6, opacity: 1, stagger: 0.2 });
    tl.to(".legend__data", { y: 0, duration: 0.6, opacity: 1, stagger: 0.4 });
  } catch (error) {
    console.log(error);
    loaderFrame.innerHTML = "Error";
  }
}

function listLegends(data) {
  data.map(function (legend) {
    const legendText = `
        <img src="${legend.thumbnail.default}" alt="${legend.nickname}">
        <div class="legend__nickname">${legend.nickname}</div>
    `;
    const item = document.createElement("li");
    item.innerHTML = legendText;
    listFragment.appendChild(item);

    item.addEventListener("click", function () {
      viewDetail(legend);
    });
  });
  legendsList.appendChild(listFragment);
}

function viewDetail(data) {
  let result = `
    <div class="legend__data">
        <div class="data__nickname">Name: ${data.nickname}</div>
        <div class="data__age">Age: ${data.age}</div>
        <div class="data__home">Home: ${data.home}</div>
        <div class="data__type">Type: ${data.type}</div>
        <div class="data__description">Description: ${data.desc}</div>
    </div>
    <img src="${data.thumbnail.medium}" alt="${data.nickname}">
       
  `;

  legend.innerHTML = result;

  // GSAP Animation
  const tl = gsap.timeline();
  tl.to(".legend__nav", { y: 0, duration: 0.6, opacity: 1 });
  tl.to("#legend img", { y: 0, duration: 0.6, opacity: 1, stagger: 0.2 });
  tl.to(".legend__data", { y: 0, duration: 0.6, opacity: 1, stagger: 0.4 });
}

getLegends();
