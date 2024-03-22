import config from "../conf/index.js";
function getCityFromURL(search) {
    const urlparams = new URLSearchParams(search);
    const city = urlparams.get(`cities`)
    return city;

}
async function fetchAdventures(city) {
    try {
        const data1 = await fetch(config.backendEndpoint + `/adventures/?city=${city}`);
        return data1.json();
    }
    catch {
        return null;

    }
}
function addAdventureToDOM(adventures) {
    for (let i = 0; i < adventures.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "col-12 col-sm-6 col-lg-3 mb-3");
        div.innerHTML = `
        <a id=${adventures[i].id} href="detail/?adventure=${adventures[i].id}">
          <div class="card activity-card">
            <img src=${adventures[i].image}>
              <div class="category-banner">${adventures[i].category}</div>
              <div class="card-body col-md-12 mt-2">
                <div class="d-flex justify-content-between">
                  <p>${adventures[i].name}</p>
                  <p>₹${adventures[i].costPerHead}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p>Duration</p>
                  <p>${adventures[i].duration} Hours</p>
                </div>
              </div>
          </div>
        </a>`
        document.getElementById("data").append(div);
    }
}
