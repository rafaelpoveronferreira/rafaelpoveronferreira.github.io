import { TECHS } from '../../../global/constants.js'

const TechList = () => {
    return (
        <div className='relative text-center h-[15%] w-full flex justify-center overflow-x-auto gap-6 border-b border-b-solid border-fading-white-10 bg-fading-white-5'>
            {TECHS.map((e,i)=>
                <div key={i} className='relative min-w-fit h-full group/icon text-center group opacity-70 hover:opacity-100'>
                    <img src={e[0]} alt={e[1]} 
                        className="h-full group-hover/icon:-translate-y-2 w-9 object-contain " />
                    <span className='opacity-0 -translate-y-5 select-none -translate-x-1/2 group-hover/icon:opacity-100 absolute text-fading-white-80 text-xs'>
                        {e[1]}</span>
                </div>
            )}
        </div>
    )
}

export default TechList;
