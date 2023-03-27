import { capitalizeFirstLetter, filterByName, sortPokemons} from './data.js';
import data from './data/pokemon/pokemon.js';

const template = document.querySelector("template").content;
const num = template.querySelector("[data-num='']");
const img = template.querySelector("img");
const name = template.querySelector("[data-name='']");
const type = template.querySelector("[data-type='']");
const weight = template.querySelector("[data-weight='']");
const height = template.querySelector("[data-height='']");
const weaknesses = template.querySelector("[data-weaknesses='']");
const resistant = template.querySelector("[data-resistant='']");
const text = document.getElementById("palavra_chave");

document.getElementById("buscar_btn").addEventListener("click", filterPokemons);
document.getElementById("ordenacao_select").addEventListener("change", sort);

let pokemonsToShow = data.pokemon;
showPokemons(pokemonsToShow);

function showPokemons(pokemons) {
  const container = document.getElementById("container");

  pokemons.forEach(pokemon => {
    container.append(generateNewPokemonNode(pokemon));
  });
}

function generateNewPokemonNode(pokemon) {
  num.dataset.num = pokemon.num;

  img.src = pokemon.img;
  img.value = pokemon.img;

  name.textContent = capitalizeFirstLetter(pokemon.name);
  name.dataset.name = pokemon.name;
  
  type.dataset.type=pokemon.type.join("_");
  type.childNodes[1].textContent = pokemon.type.join(", ");

  weight.dataset.weight=pokemon.size.weight;
  weight.childNodes[1].textContent = pokemon.size.weight;

  height.dataset.height=pokemon.size.height;
  height.childNodes[1].textContent = pokemon.size.height;

  weaknesses.dataset.weaknesses=pokemon.weaknesses.join("_");
  weaknesses.childNodes[1].textContent = pokemon.weaknesses.join(", ");

  resistant.dataset.resistant=pokemon.resistant.join("_");
  resistant.childNodes[1].textContent = pokemon.resistant.join(", ");

  return template.cloneNode(true);
}

function filterPokemons(){
  pokemonsToShow = filterByName(text.value, data.pokemon);

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

  const result = sortPokemons(pokemonsToShow, selected);

  resetContainer();
  showPokemons(result);
}