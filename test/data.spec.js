import { capitalizeFirstLetter, filterByName, sortBySpawn } from '../src/data.js';


describe('captalizeFirstLetter', () => {
  it('is a function', () => {
    expect(typeof capitalizeFirstLetter).toBe('function');
  });

  it('should return Abc for abc', () => {
    expect(capitalizeFirstLetter("abc")).toBe("Abc");
  });
});

describe('filterByName', () => {
  const pokemons = [{"name":"abc"}, {"name":"cde"}, {"name":"xyz"}];

  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('should return array with 1 for abc name', () => {
    const result = filterByName("abc", pokemons);
    expect(result.length).toBe(1);
  });

  it('should return array with 2 for c name', () => {
    const result = filterByName("c", pokemons);
    expect(result.length).toBe(2);
  });
});

describe('sortBySpawn', () => {
  const pokemons = [{"spawn-chance":"0.1"}, {"spawn-chance":"0.2"}, {"spawn-chance":"0.3"}];

  it('is a function', () => {
    expect(typeof sortBySpawn).toBe('function');
  });

  it('should return array sort by spawn-chance', () => {
    const result = sortBySpawn(pokemons);
    expect(result[0]["spawn-chance"]).toBe("0.3");
  });
});