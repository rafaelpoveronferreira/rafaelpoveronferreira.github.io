import { useContext } from "react";
import { LanguageContext } from "../../../context/config";

const ProjectDescription = () => {
    const {dictionary} = useContext(LanguageContext)
    
    return (
        <ul className='h-[55%] w-full overflow-y-scroll scrollbar
         text-[1.4rem] lg:text-base xl:text-sm 2xl:text-xs text-justify
         p-5 px-7 select-none
        bg-fading-white-2 text-fading-white-80 '>
            {dictionary?.projects[0].description?.map((e,i)=>
                <li key={i} className="list-disc sm:mb-6 sm:ml-6 mb-8 ml-12 text-left">
                    {e}
                </li>
            )}
            
        </ul>
    )
}

export default ProjectDescription;
