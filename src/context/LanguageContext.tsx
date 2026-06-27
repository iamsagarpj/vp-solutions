"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { LangCode, t } from "@/data/translations";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  tr: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  tr: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  const setLang = useCallback((l: LangCode) => setLangState(l), []);

  const tr = useCallback(
    (key: string): string => {
      const entry = t[key];
      if (!entry) return key;
      return entry[lang] ?? entry["en"] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
