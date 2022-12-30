import { TECHS } from '../../../global/constants.js'

const TechList = () => {
    // Responsividade (necessário otimizar com CSS puro)
    //const TECHSCONCAT = window.innerWidth<=640?[['',''],['',''],['',''],['','']].concat(TECHS):TECHS;

    return (
        <div className='text-center h-[8%] lg:h-[15%] w-full flex justify-center overflow-x-auto overflow-y-hidden gap-6 
        border-b border-b-solid border-fading-white-10 bg-fading-white-5'>
            {TECHS.map((e,i)=>
                <div key={i} className='min-w-fit h-full text-center
                group/icon opacity-70 hover:opacity-100 active:opacity-100'>
                    <img src={e[0]} alt={e[1]} 
                        className="h-full w-auto py-5 sm:py-4 lg:py-3 xl:py-2 
                        group-hover/icon:-translate-y-2 group-active/icon:-translate-y-2 
                        object-contain " />
                    <span className='absolute text-fading-white-80 
                    -translate-y-5 lg:-translate-y-4 -translate-x-1/2 
                    text-sm sm:text-base lg:text-xs xl:text-[0.6rem]
                    opacity-0 select-none 
                    group-hover/icon:opacity-100 group-active/icon:opacity-100 '>
                        {e[1]}</span>
                </div>
            )}
        </div>
    )
}

export default TechList;
