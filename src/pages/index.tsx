import type { NextPage } from 'next';
import { useEffect } from 'react';
import Header from '../components/Header';
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
    <main>
      <Header />
    </main>
  );
};

export default Home;
