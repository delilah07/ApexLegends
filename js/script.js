const url = "https://raddythebrand.github.io/apex-legends/data.json";
const loader = document.querySelector("#loading");
const loaderFrame = document.querySelector("#loading__frame");

async function getLegends() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (response) {
      loader.style.display = "none";
    }
  } catch (error) {
    console.log(error);
    loaderFrame.innerHTML = "Error";
  }
}

getLegends();
