
const ProjectDescription = () => {
    return (
        <ul className='h-[55%] w-full overflow-y-scroll scrollbar
         text-[1.4rem] lg:text-base xl:text-sm 2xl:text-xs text-justify
         p-5 px-7 select-none
         [&>*]:mb-3 [&>*]:sm:mb-1 list-disc
        bg-fading-white-2 text-fading-white-80 '>
            <li>{'Desenvolvido com stack MERN (MongoDB + Express + React + Node)'}</li>
            <li>{'Deploy do servidor via AWS'}</li>
            <li>{'Apesar de funcional, site criado para auto-aprendizado, sem uso comercial. Nome do site é anagrama de Shein'}</li>
            <li className="[&>*]:ml-7 [&>*]:list-none">{'Próximas features a serem implementadas:'}
                <li className="mt-2">{'.página do administrador'}</li>
                <li>{'.perfil customizável para cada usuário'}</li>
                <li>{'.otimização do código'}</li>
                <li>{'.múltiplos idiomas'}</li>
                <li>{'.busca avançada'}</li>
            </li>
            
        </ul>
    )
}

export default ProjectDescription;
