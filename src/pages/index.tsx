import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import TextArea from '../components/TextArea';
import Display from '../components/Display';
import useDebounce from '../hooks/useDebouncer';
import { Languages } from '../components/types';
import { getLanguages, translate } from '../services/translateApi';
import Select from '../components/Select';

const Home: NextPage = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('Tradução');
  const [languages, setLanguages] = useState<Languages[]>([]);
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('en');

  const debounceTranslation = useDebounce(text, 500);

  useEffect(() => {
    const fetchLanguages = async () => {
      const response = await getLanguages();
      setLanguages(response);
    };
    fetchLanguages();
  }, []);

  useEffect(() => {
    if (!text) {
      setTranslation('Tradução');
    }
    if (debounceTranslation && text) {
      setTranslation('Traduzindo...');

      const fetchData = async () => {
        const { translatedText } = await translate(
          debounceTranslation,
          sourceLanguage,
          targetLanguage,
        );
        setTranslation(translatedText);
      };
      fetchData();
    }
  }, [debounceTranslation, sourceLanguage, targetLanguage, text]);

  const setSourceLanguageHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSourceLanguage(e.target.value);
  };

  const setTargetLanguageHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setTargetLanguage(e.target.value);
  };

  return (
    <main className="flex flex-col h-screen w-screen bg-ballblue">
      <Header />
      <section className="flex flex-col justify-center items-center flex-grow pb-10">
        <div className="flex w-2/5">
          <Select
            className="w-1/2 p-2 bg-white shadow-lg rounded-tl-lg text-2xl text-center border border-b-gray-400 hover:bg-gray-200 focus:bg-gray-300 cursor-pointer"
            name="source"
            id="source"
            onChange={setSourceLanguageHandler}
            options={languages}
          />
          <Select
            className="w-1/2 p-2 bg-white shadow-lg rounded-tr-lg text-2xl text-center border border-b-gray-400 hover:bg-gray-200 focus:bg-gray-300 cursor-pointer"
            name="target"
            id="target"
            onChange={setTargetLanguageHandler}
            options={languages}
          />
        </div>
        <div className="flex w-2/5 h-1/3">
          <TextArea name="target" value={text} onChange={setText} />
          <Display text={translation} />
        </div>
      </section>
    </main>
  );
};

export default Home;
