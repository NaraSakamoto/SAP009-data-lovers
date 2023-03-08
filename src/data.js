
export const capitalizeFirstLetter = (text)  => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const filtrarPorNome = (text, pokemons) => {
  const result = pokemons.filter((pokemon) => {
    return pokemon.name.includes(text);
  });

  return result;
}


