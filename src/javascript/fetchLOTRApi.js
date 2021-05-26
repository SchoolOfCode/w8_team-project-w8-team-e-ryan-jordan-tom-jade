export async function fetchLOTRApi(searchOption, name, id) {
  let response = await fetch(
    `/.netlify/functions/netlify-fetch-lotr?search=${searchOption}&id=${id}&name=${name}`
  );

  let jsonResponse = await response.json();
  return jsonResponse;
}
