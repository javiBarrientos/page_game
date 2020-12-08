var url =
  "https://my-json-server.typicode.com/javiBarrientos/page_game/characters";

/**
 * Gets an array with the data of the characters
 *
 * @param {*} url  the url of the REST API
 */
async function getData(url) {
  const response = await fetch(url);
  const promesa = response.json();
  return promesa;
}

/**
 * Creates the container with the data of the players.
 *
 * @param {*} dades JSON data of the characters and its images
 */
function showCharacters(dades) {
  let pare = document.getElementById("characters");

  dades.forEach((character) => {
    //Create the div
    let div = document.createElement("div");
    //Add the class
    div.classList.add("character");
    //Append to the characters container
    pare.appendChild(div);

    //Add the name
    let h2 = document.createElement("h2");
    h2.innerHTML = character.name;
    div.appendChild(h2);

    //Add the motto
    let p = document.createElement("p");
    p.innerHTML = character.motto;
    div.appendChild(p);

    //Add the image
    let img = document.createElement("img");
    img.src = character.img;
    div.appendChild(img);
  });
}

window.onload = () => {
  // Resolem la promesa amb then
  getData(url).then((dades) => showCharacters(dades));
};
