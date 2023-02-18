/**
 * Este es un programa que muestra las habilidades de un Pokemon utilizando la API de PokeAPI.
 * @param {string} pokemonName - El nombre del Pokemon a buscar.
 * @returns {Promise<string[]>} Una promesa que se resuelve en una lista de habilidades del Pokemon.
 * Si el Pokemon no se encuentra, la promesa muestra una lista vacía.
 */
async function habilidadesPokemon(pokemonName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = await response.json();
      const abilities = pokemonData.abilities.map(ability => ability.ability.name);
      return abilities;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  /**
   * Función para probar la función fetchPokemonAbilities con el Pokemon "pikachu".
   * Imprime las habilidades del Pokemon "pikachu" en la consola.
   */
  async function testear() {
    const abilities = await habilidadesPokemon("pikachu");
    console.log(abilities);
  }

  async function testear() {
    const abilities = await habilidadesPokemon("perro");
    console.log(abilities);
  }
  async function testear() {
    const abilities = await habilidadesPokemon("bulbasaur");
    console.log(abilities);
  }
  async function testear() {
    const abilities = await habilidadesPokemon("ditto");
    console.log(abilities);
  }
  // Ejecuta la función test para probar el programa
  testear();