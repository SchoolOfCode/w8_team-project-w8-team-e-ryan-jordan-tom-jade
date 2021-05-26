// import { LOTR_API_KEY } from '../config/prod.js';
// import { LOTR_API_KEY } from '../config/dev.js';

export async function fetchLOTRApi(searchOption, name, id) {
  let url;
  let response = await fetch(
    `/.netlify/functions/netlify-fetch-lotr?search=${searchOption}&id=${id}&name=${name}`
  );

  // let requestOptions = {
  //   headers: {
  //     Authorization: `Bearer ${LOTR_API_KEY}`,
  //   },
  // };
  // let response = await fetch(url, requestOptions);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
}
