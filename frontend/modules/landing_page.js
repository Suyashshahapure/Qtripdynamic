import config from "../conf/index.js";
async function init() {
    let cities = await fetchCities();
    if (cities) {
        cities.foreach((key) => {
            addCityToDOM(key.id, key.city, key.escription, key.image)
        });

    }
}
async function fetchCities() {
    try {
        let cities = await fetch(config.backEndpoint + `cities`)
        return cities.json();

    }
    catch (e) {
        return null;
    }
}
function addCityToDOM(id, city, description, image) {
    let card = document.getElementById("data");
    let content = document.createElement("div");
    content.className = "col-6 col-md-4 col-lg-3 mb-4"
    content.innerHTML = `<a href="pages/adventures/?city=${id}" id="${id}">
    <div class="tile">
      <div class="tile-text text-center">
        <h5>${city}</h5>
        <p>${description}</p>
      </div>
    <img class="img-responsive" src="${image}">
    </div>
  </a>`
    card.appendChild(content);
}