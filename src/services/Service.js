import Axios from 'axios';

const proxyUrl = 'https://cors-anywhere.herokuapp.com';

export const getLastComic = () => {
  return Axios.get(`${proxyUrl}/https://xkcd.com/info.0.json`);
};

export const getComicById = (comicId) => {
  return Axios.get(`${proxyUrl}/https://xkcd.com/${comicId}/info.0.json`);
};
