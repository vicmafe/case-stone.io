import axios from 'axios';

const GetDataMarvel = async (type) => {
  const urlFetch = `https://gateway.marvel.com:443/v1/public/${type}?apikey=8ef984a740be029095f063b36cdc25fa`;
  const requestMarvel = await axios.get(urlFetch);
  const { data } = requestMarvel;
  return data;
};

export default GetDataMarvel;
