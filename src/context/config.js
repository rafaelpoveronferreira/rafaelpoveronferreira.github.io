import { createContext } from 'react';
import enUS from './en-US.js';
import ptBR from './pt-BR.js';                   

export const dictionaryList = { enUS, ptBR };

export const LanguageContext = createContext({
  language: 'enUS',
  dictionary: dictionaryList.enUS
});