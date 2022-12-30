
const ProjectDescription = () => {
    return (
        <ul className='h-[55%] w-full overflow-y-scroll scrollbar bg-fading-white-2 text-fading-white-80 text-lg py-4 px-10 select-none'>
            <li>{'Desenvolvido com stack MERN (MongoDB + Express + React + Node)'}</li>
            <li>{'Inversão de SHEIN'}</li>
            <li>{'Criado para auto-aprendizado'}</li>
            <ul >{'Próximas features a serem implementadas:'}
                <li>{'.página do administrador'}</li>
                <li>{'.perfil customizável para cada usuário'}</li>
                <li>{'.otimização do código'}</li>
                <li>{'.múltiplos idiomas'}</li>
                <li>{'.busca avançada'}</li>
            </ul>
            
        </ul>
    )
}

export default ProjectDescription;
