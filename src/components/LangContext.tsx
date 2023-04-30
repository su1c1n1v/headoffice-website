import { createContext } from 'react';
import React from 'react';

type LangContextType = {
  context: string | null;
  setContext: React.Dispatch<React.SetStateAction<string>>;
};

const iLangContextState = {
  context: null,
  setContext: () => {},
};

const LangContext = createContext<LangContextType>(iLangContextState);

export default LangContext;
