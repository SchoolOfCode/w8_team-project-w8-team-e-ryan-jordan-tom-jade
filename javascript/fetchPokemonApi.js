export async function fetchPokemonApi(id) {
  let response;
  if (id) {
    response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  } else {
    response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  }
  let jsonResponse = await response.json();
  return jsonResponse;
}
