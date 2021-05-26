const axios = require('axios');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const { search, id, name } = event.queryStringParameters;
  const API_KEY = process.env.LOTR_API_KEY;
  let url;
  console.log(search);
  if (search === 'quote') {
    url = `https://the-one-api.dev/v2/character/${id}/quote`;
  } else if (search === 'character') {
    url = `https://the-one-api.dev/v2/character?name=${name}`;
  }
  let requestOptions = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    // const { data } = await fetch(url, requestOptions);
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      // body: data,
    };
  } catch (error) {
    console.log(error);
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
