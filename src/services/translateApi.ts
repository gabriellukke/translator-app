import axios from 'axios';

export const getLanguages = async () => {
  const { data } = await axios.get('https://libretranslate.com/languages');
  return data;
};

export const translate = async (
  text: string,
  source: string,
  target: string,
) => {
  const { data } = await axios.post('https://libretranslate.de/translate', {
    q: text,
    source,
    target,
    format: 'text',
  });
  return data;
};
