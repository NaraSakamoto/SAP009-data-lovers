import { capitalizeFirstLetter, filtrarPorNome } from '../src/data.js';


describe('captalizeFirstLetter', () => {
  it('is a function', () => {
    expect(typeof capitalizeFirstLetter).toBe('function');
  });

  it('should return Abc for abc', () => {
    expect(capitalizeFirstLetter("abc")).toBe("Abc");
  });
});

describe('filtrarPorNome', () => {
  const pokemons = [{"name":"abc"}, {"name":"cde"}, {"name":"xyz"}];

  it('is a function', () => {
    expect(typeof filtrarPorNome).toBe('function');
  });

  it('should return array with 1 for abc name', () => {
    const result = filtrarPorNome("abc", pokemons);
    expect(result.length).toBe(1);
  });

  it('should return array with 2 for c name', () => {
    const result = filtrarPorNome("c", pokemons);
    expect(result.length).toBe(2);
  });
});