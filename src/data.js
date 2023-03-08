
export const capitalizeFirstLetter = (text)  => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const filterByName = (text, pokemons) => {
  const result = pokemons.filter((pokemon) => {
    return pokemon.name.includes(text);
  });

  return result;
}

export const sortBySpawn = (pokemons) => {
  const result = pokemons.sort((a, b) => {
    if(a["spawn-chance"] < b["spawn-chance"]){
      return 1
    }
    if(a["spawn-chance"] > b["spawn-chance"]){
      return -1;
    }
    return 0;
  });

  return result;
}

