export async function fetchPokemonApi(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let jsonResponse = await response.json();
  return jsonResponse;
}
