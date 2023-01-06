import { useState } from 'react'
import {dictionaryList, LanguageContext} from './config'

const LanguageProvider = ({children}) => {
    // Manipulação da query string associada à URL por meio de instãncia do URLSearchParams e de state React
    const searchParams = new URLSearchParams(document.location.search)
    const [language, setLanguage] = useState(searchParams.get('language')?searchParams.get('language'):'enUS')
    
    const provider = {
      language,
      dictionary: dictionaryList[language],
      languageToggle: ()=> {
        const newLanguage = language=='enUS'?'ptBR':'enUS';
        setLanguage(newLanguage);
        searchParams.set('language', newLanguage)
        window.history.replaceState({}, '', `${document.location.pathname}?${searchParams}`);
      }
    }

    return (
      <LanguageContext.Provider value={provider}>
        {children}
      </LanguageContext.Provider>
    )
}

export default LanguageProvider


