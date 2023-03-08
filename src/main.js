import { capitalizeFirstLetter, filterByName, sortBySpawn, sortByNumber} from './data.js';
import data from './data/pokemon/pokemon.js';


document.getElementById("buscar_btn").addEventListener("click", filterPokemons);
document.getElementById("ordenacao_select").addEventListener("click", sort);

let pokemonsToShow = data.pokemon;
showPokemons(pokemonsToShow);

function showPokemons(pokemons) {
  const container = document.getElementById("container");

  pokemons.forEach(pokemon => {
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

function filterPokemons(){
  const text = document.getElementById("palavra_chave").value;
  pokemonsToShow = filterByName(text, data.pokemon);

  resetContainer();
  showPokemons(pokemonsToShow);
}

function resetContainer(){
  const list = document.querySelectorAll("#container section");
  for(const element of list) {
    element.remove();
  }
}

function sort(){
  const selected = document.getElementById("ordenacao_select").selectedIndex;

  let result;

  if(selected === 0){
    result = sortByNumber(pokemonsToShow);
  }
  if(selected === 1){
    result = sortBySpawn(pokemonsToShow);
  }

  resetContainer();
  showPokemons(result);
}