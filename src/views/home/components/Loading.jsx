import { useEffect, useRef, useState } from "react"
import useDelayUnmount from "../../../hooks/useDelayUnmount"

const Loading = ({setIsLoading}) => {
    // States, Variáveis e Hook customizado usados para atrasar o Unmount do component REACT
    // Custom Hook cria um atraso na igualdade de isMounted com shouldRender, que resulta no delay do Unmount
    // Créditos: https://codepen.io/WithAnEs/pen/wNmjog?editors=0111 
    const [isMounted, toggleIsMounted] = useState(true);
    const DELAYMS = 1000;
    const shouldRender = useDelayUnmount(isMounted, DELAYMS);
  
    // States e variáveis da animação
    const text = '<portfolio />'
    const [count, setCount] = useState(0)
    const [loadingText, setLoadingText] = useState('')
    
    // Hook de Animação
    useEffect(()=>{
        setTimeout(() => {
            setLoadingText(text.slice(0,count+1));
            setCount(count+1)

            if('<portfolio />'==loadingText) {
                document.querySelector('#loading-cursor').classList.remove('animate-pulsar')

                document.querySelector('#loading-text').classList.add('delay-300', 'duration-500')
                document.querySelector('#loading-text').classList.add('opacity-0', 'scale-50')
                setIsLoading(false)
            }
           
        }, 150)
    },[loadingText])

    // Hook para o delay
    useEffect(()=>{
        if('<portfolio />'==loadingText) {
            toggleIsMounted(!isMounted);
        }
       
    },[loadingText])
    

    return (
        <>
        {shouldRender && 
            <div id='loading' 
              className={`bg-dark-gray z-50 absolute w-screen h-screen flex justify-center items-center`}
            >
                <div id='loading-text' className="flex justify-start">
                    <h1 className="text-white">{loadingText}</h1>
                    <span id='loading-cursor' className="animate-pulsar text-white text-4xl font-bold">|</span>
                </div>
            </div>
          }
        </>
    )
}

export default Loading