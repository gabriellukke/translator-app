import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getLanguages, translate } from '../services/translateApi';

const Home: NextPage = () => {
  useEffect(() => {
    const fetchLanguages = async () => {
      const languages = await getLanguages();
      console.log(languages);
    };
    fetchLanguages();
    const translateTest = async () => {
      const translated = await translate('hello', 'en', 'pt');
      console.log(translated);
    };
    translateTest();
  }, []);
  return (
    <div className="text-3xl font-bold underline">React Next Boilerplate</div>
  );
};

export default Home;
