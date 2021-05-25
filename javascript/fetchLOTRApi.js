// import { LOTR_API_KEY } from '../config/prod.js';
import { LOTR_API_KEY } from '../config/dev.js';

export async function fetchLOTRApi(searchOption, name, id) {
  console.log(searchOption);
  let url;
  if (searchOption === 'quote') {
    url = `https://the-one-api.dev/v2/character/${id}/quote`;
  } else if (searchOption === 'character') {
    url = `https://the-one-api.dev/v2/character?name=${name}`;
  }

  let requestOptions = {
    headers: {
      Authorization: `Bearer ${LOTR_API_KEY}`,
    },
  };
  let response = await fetch(url, requestOptions);
  let jsonResponse = await response.json();
  return jsonResponse;
}
