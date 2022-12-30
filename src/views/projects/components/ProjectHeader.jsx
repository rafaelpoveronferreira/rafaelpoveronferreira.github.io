import niehs from '../../../assets/NIEHS.png'
const ProjectHeader = () => {
    return (
        <a href='http://niehs.github.io' target={'_blank'}
            className='h-[30%] w-full flex flex-col items-center justify-center sm:flex-row 
                border-b border-b-solid border-fading-white-10 cursor-pointer 
                text-3xl md:text-2xl lg:text-lg text-center'>
            <img className='w-full h-4/5 sm:h-full sm:w-2/5 p-5 opacity-70 object-contain'
                src={niehs} alt='NIEHS'>

            </img>
            <div className='w-full h-1/5 sm:h-full sm:w-3/5 
            flex flex-col items-center justify-center p-5 text-fading-white-80'>
                <span className='-translate-y-2 sm:translate-y-0'>Comércio Eletrônico full-stack</span>
            </div>
        </a>
    )
}

export default ProjectHeader;
