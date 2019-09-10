import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://gateway.marvel.com:443';

const getCharacters = async payload => {
  const { publicKey = '429d71a720687e6c704869feca65ae77', limit = 20, name, hash= 'ff21487c0a3eda560831f0f37f48f130' } = payload;
  let params = `ts=${limit}&apikey=${publicKey}&hash=${hash}`;
  if (name) {
    params += `&nameStartsWith=${name}`;
  }

  const response = await fetch(`${BASE_URL}/v1/public/characters?${params}`);

  return response.json();
};

export { getCharacters };
