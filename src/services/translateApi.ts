import axios from 'axios';

export const getLanguages = async () => {
  const { data } = await axios.get('https://libretranslate.com/languages');
  return data;
};
