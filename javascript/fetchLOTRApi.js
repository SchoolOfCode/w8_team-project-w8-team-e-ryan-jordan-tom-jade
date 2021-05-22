import { LOTR_API_KEY } from '../config/dev.js';

export async function fetchLOTRApi(characterId) {
  let requestOptions = {
    headers: {
      Bearer: LOTR_API_KEY,
    },
  };
  let response = await fetch(
    `https://the-one-api.dev/v2/character/${characterId}`
  );
}
