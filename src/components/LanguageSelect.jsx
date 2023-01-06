import { useContext } from "react"
import { LanguageContext } from "../context/config"
import enUSsvg from '../assets/en-US.svg'
import ptBRsvg from '../assets/pt-BR.svg'

const LanguageSelect = ({id}) => {
    const {language, languageToggle} = useContext(LanguageContext)
    return (
        <img className='absolute top-[4%] left-[4%] z-[999] opacity-0 -translate-x-[200%] duration-300
                h-6 w-8 object-contain hover:opacity-100' 
                id={id}
                src={language=="enUS"?enUSsvg:ptBRsvg} alt="flag" 
                onClick={()=>{language=='enUS'?languageToggle('ptBR'):languageToggle('enUS')}}/>
    )

}

export default LanguageSelect