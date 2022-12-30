import { useEffect, useRef, useState } from "react"
import { TILESIZE } from "../../../global/constants"

const GridMask = ({handleOnClick, toggle}) => {
    // quantidade de colunas, linhas e área total. Usado para renderizar grid da máscara da página
    const [columns, setColumns] = useState(null)
    const [rows, setRows] = useState(null)
    
    //hook useRef para acessar propriedades de elementos do DOM
    const home = useRef(null)

    // Primeiro cálculo das colunas e linhas da máscara
    useEffect(()=>{
        if(!columns && !rows) {
            setColumns(Math.floor(window.innerWidth/TILESIZE));
            setRows(Math.floor(window.innerHeight/TILESIZE));
        }
        
    },[])

    // A cada resize, recalcula e atualiza state com linhas e colunas, o que é gatilho para nova renderização
    window.onresize = () => {
        setColumns(Math.floor(window.innerWidth/TILESIZE));
        setRows(Math.floor(window.innerHeight/TILESIZE));
    }

    return (
        <div id='animated-grid'
        ref={home}
        className="w-full h-screen grid"
        style={{gridTemplateColumns: `repeat(${columns?columns:1}, 1fr)`, gridTemplateRows: `repeat(${rows?rows:1}, 1fr)`}}>
        {
        Array.from(Array(columns*rows)).map((e, i) => 
            <div 
            key={i}
            className="tile relative"
                onClick={()=>handleOnClick(i)} >
                    <div className={`tile-mask ${toggle && 'opacity-0'}`} />
            </div>
        )}
        </div>
    )
}

export default GridMask