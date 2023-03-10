import { useEffect, useState, useRef, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import presentationTypingAnimation from "../../../utils/presentationTypingAnimation";
import rafaelpf from "../../../assets/rafaelpf.png"
import { TextHome } from "../../../context/Text";

const Presentation = ({handleOnClick, toggle}) => {
    // Id do timer do efeito de digitação, para que possa ser ativado e desativado
    const [typingTimerId, setTypingTimerId] = useState(null)

    // hook useRef para manipular elementos do DOM
    const presentationHeader = useRef(null)
    const presentationIcon = useRef(null)
    const presentationImg = useRef(null)

    useEffect(()=>{
        if(toggle) {
            // Função presentationTypingAnimation gera novo timer responsável pela animação de Typing
            // e retorna Id do novo Timer
            setTypingTimerId(presentationTypingAnimation(typingTimerId))

            presentationHeader.current.classList.add('delay-1000')
            presentationHeader.current.classList.remove('opacity-0', '-translate-x-[200%]')

            document.getElementById('language-option').classList.add('delay-1000', 'opacity-60')
            document.getElementById('language-option').classList.remove('opacity-0', '-translate-x-[200%]')

            presentationIcon.current.classList.add('delay-1000', 'animate-pulse')
            presentationIcon.current.classList.remove('opacity-0', '-z-50', 'translate-y-[350%]')

            presentationImg.current.classList.add('delay-1000', 'opacity-80')
            presentationImg.current.classList.remove('opacity-0', 'translate-x-[200%]')
            setTimeout(()=>{
                presentationImg.current.classList.remove('delay-1000')
                document.getElementById('language-option').classList.remove('delay-1000')
                presentationIcon.current.classList.remove('delay-1000')
                presentationHeader.current.classList.remove('delay-1000')
            }, 1000)
        } else {
            // Usuário ligou a máscara, portanto o atual timer da animação de typing será desligada  
            // pela função presentationTypingAnimation, que retornará null
            if(typingTimerId) {setTypingTimerId(presentationTypingAnimation(typingTimerId))}

            presentationHeader.current.classList.remove('delay-1000')
            presentationHeader.current.classList.add('opacity-0', '-translate-x-[200%]')

            document.getElementById('language-option').classList.remove('delay-1000', 'opacity-60')
            document.getElementById('language-option').classList.add('opacity-0', '-translate-x-[200%]')

            presentationIcon.current.classList.remove('delay-1000', 'animate-pulse')
            presentationIcon.current.classList.add('opacity-0', '-z-50', 'translate-y-[350%]')

            presentationImg.current.classList.remove('delay-1000', 'opacity-80')
            presentationImg.current.classList.add('opacity-0', 'translate-x-[200%]')
        }
    },[toggle])

    return(
        <>
            <h1 id="grid-mask-header"
            onClick={handleOnClick}
            className="text-[rgba(200,200,200,0.25)] z-40 text-7xl text-center select-none 
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <TextHome tid='gridMaskText'/></h1>

            <div ref={presentationHeader}
                onClick={handleOnClick}
                className='absolute sm:left-20 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.5)] duration-300
                     opacity-0 -translate-x-[200%]
                     flex flex-col justify-center items-center sm:items-start 
                     w-full sm:w-full h-1/3 '>
                <h2 id="presentation-header" className="select-none">Rafael P F</h2>
                
                <div className="select-none">
                    <div id='presentation-subheader' className="flex justify-start static">
                        <h3>
                            <TextHome tid='subheader'/>
                        </h3>
                        <h3 id='animated-subheader'>
                            r
                        </h3>
                        <h3 className="animate-pulsar">|</h3>
                    </div>
                </div>
            </div>
            
            <a href="#projects" >
                <div ref={presentationIcon}
                    className="absolute text-fading-white-50 select-none duration-300 
                    top-[83%] left-1/2 -translate-x-1/2 opacity-0 -z-50 translate-y-[350%] flex flex-col gap-4 sm:gap-4 lg:gap-0">
                    <span className="text-center text-3xl sm:text-2xl md:text-2xl lg:text-[1.1rem]">
                        <TextHome tid='linkToProjects'/></span>
                    <FontAwesomeIcon icon={faCircleChevronDown} color='rgba(255,255,255,0.5)' size="3x"
                        className="scale-110 sm:scale-100 lg:scale-75" />
                </div>
            </a>
            
            <img ref={presentationImg} 
                onClick={handleOnClick}
                src={rafaelpf} alt="foto de rafael" 
                className="absolute -translate-y-1/2 duration-300 object-cover w-72 h-96 
                rounded-xl shadow-2xl hover:opacity-100 hover:delay-[0ms] hover:scale-105
                hidden sm:block top-1/2 right-20 opacity-0 translate-x-[200%]" />
        </>
    )
}

export default Presentation