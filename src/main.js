import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

initPokemon(data);

function initPokemon(data) {
    const container = document.getElementById("container");

    data.pokemon.forEach(pokemon => {
        container.append(generateNewPokemonNode(pokemon));
    });
}

function generateNewPokemonNode(pokemon) {
    const template = document.querySelector("template").content.cloneNode(true);

    template.getElementById("pokemon_img").src = pokemon.img;
    template.getElementById("pokemon_name").textContent = capitalizeFirstLetter(pokemon.name);
    template.querySelector("#pokemon_type strong").textContent = pokemon.type.join(", ");
    template.querySelector("#pokemon_weight strong").textContent = pokemon.size.weight;
    template.querySelector("#pokemon_height strong").textContent = pokemon.size.height;
    template.querySelector("#pokemon_weaknesses strong").textContent = pokemon.weaknesses.join(", ");
    template.querySelector("#pokemon_resistant strong").textContent = pokemon.resistant.join(", ");

    return template;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}