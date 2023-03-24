import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

const getPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    const pokemonList = response.data.results;
    return pokemonList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

getPokemonList().then((pokemonList) => {
  console.log('List of Pokemon:');
  pokemonList.forEach((pokemon) => {
    console.log(${pokemon.name} - ${pokemon.url});
  });
}).catch((error) => {
  console.error(error);
});