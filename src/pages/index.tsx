import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getLanguages } from '../services/translateApi';

const Home: NextPage = () => {
  useEffect(() => {
    const fetchLanguages = async () => {
      const languages = await getLanguages();
      console.log(languages);
    };
    fetchLanguages();
  }, []);
  return (
    <div className="text-3xl font-bold underline">React Next Boilerplate</div>
  );
};

export default Home;
