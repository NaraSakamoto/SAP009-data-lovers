
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

export const sortByNumber = (pokemons) => {
  const result = pokemons.sort((a, b) => {
    if(a["num"] < b["num"]){
      return -1
    }
    if(a["num"] > b["spawn-chance"]){
      return 1;
    }
    return 0;
  });

  return result;
}

export const sortByType = (pokemons) => {
  const result = pokemons.sort((a, b) => {
    if(a["type"] < b["type"]){
      return -1
    }
    if(a["type"] > b["type"]){
      return 1;
    }
    return 0;
  });

  return result;
}

export const sortByWeaknesses = (pokemons) => {
  const result = pokemons.sort((a, b) => {
    if(sumOfWeaknesses(a) < sumOfWeaknesses(b)){
      return -1
    }
    if(sumOfWeaknesses(a) > sumOfWeaknesses(b)){
      return 1;
    }
    return 0;
  });

  return result;
}

function sumOfWeaknesses (pokemon) {
  return pokemon.weaknesses.length;
}