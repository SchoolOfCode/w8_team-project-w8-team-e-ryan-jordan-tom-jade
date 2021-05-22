import { LOTR_API_KEY } from '../config/dev.js';

export async function fetchLOTRApi(characterId) {
  let requestOptions = {
    headers: {
      Authorization: `Bearer ${LOTR_API_KEY}`,
    },
  };
  let response = await fetch(
    `https://the-one-api.dev/v2/quote`,
    requestOptions
  );
  let quotes = await response.json();
  console.log(quotes);
}
