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
    <main className="h-screen w-screen bg-ballblue">
      <Header />
      <section className="flex flex-col justify-center items-center h-full">
        <div className="flex w-2/5 h-2/3">
          <TextArea name="target" value={text} onChange={setText} />
          <Display text={translation} />
        </div>
        <div>
          <Select
            name="source"
            id="source"
            onChange={setSourceLanguageHandler}
            options={languages}
          />
          <Select
            name="target"
            id="target"
            onChange={setTargetLanguageHandler}
            options={languages}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
