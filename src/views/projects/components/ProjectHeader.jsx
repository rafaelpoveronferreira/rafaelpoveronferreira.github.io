import niehs from '../../../assets/NIEHS.png'
const ProjectHeader = () => {
    return (
        <a href='http://niehs.github.io' target={'_blank'}
            className='h-[30%] w-full flex border-b border-b-solid border-fading-white-10 cursor-pointer'>
            <img className='h-full w-2/5 p-5 opacity-70 object-contain'
                src={niehs} alt='NIEHS'>

            </img>
            <div className='h-full w-3/5 flex items-center p-5 text-fading-white-80'>
                <h4>Comércio Eletrônico full-stack</h4>
            </div>
        </a>
    )
}

export default ProjectHeader;
