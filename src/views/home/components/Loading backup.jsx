import { useEffect, useRef, useState } from "react"

const Loading = ({setIsLoading}) => {
    const text = '<portfolio />'

    const [count, setCount] = useState(0)
    const [loadingText, setLoadingText] = useState('')

    useEffect(()=>{
        return function cleanup() {
            document.querySelector('#app-wrapper').appendChild(document.createElement("div")).classList.add('bg-dark-gray', 'w-screen', 'h-screen')
            setTimeout(()=>{console.log('asd2')},1000)

        }
    })

    useEffect(()=>{
        setTimeout(() => {
            setLoadingText(text.slice(0,count+1));
            setCount(count+1)

            if('<portfolio />'==loadingText) {
                document.querySelector('#loading-cursor').classList.remove('animate-pulsar')

                document.querySelector('#loading-text').classList.add('delay-300', 'duration-500')
                document.querySelector('#loading-text').classList.add('opacity-0', 'scale-50')
                setTimeout(()=>{setIsLoading(false)},1000)
            }
           
        }, 150)
    },[loadingText])

    return (
        <div id='loading' className="bg-dark-gray w-screen h-screen flex justify-center items-center">
            <div id='loading-text' className="flex justify-start">
                <h1 className="text-white">{loadingText}</h1>
                <span id='loading-cursor' className="animate-pulsar text-white text-4xl font-bold">|</span>
            </div>
        </div>
    )
}

export default Loading