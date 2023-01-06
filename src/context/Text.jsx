import { useContext } from "react";
import { LanguageContext } from "./config";

export function TextHome({ tid }) {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary.home[tid] || tid;
  };

  export function TextProjects({ tid }) {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary.projects[0][tid] || tid;
  };

  export function TextContact({ tid }) {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary.contact[tid] || tid;
  };
