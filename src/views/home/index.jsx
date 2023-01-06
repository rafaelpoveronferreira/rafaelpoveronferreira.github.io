import { useState } from "react";
import Loading from "./components/Loading";
import anime from 'animejs/lib/anime.es.js';
import Presentation from "./components/Presentation";
import GridMask from "./components/GridMask";
import { TILESIZE } from "../../global/constants";

const Home = () => {
    // State que controla carregamento
    const [isLoading, setIsLoading] = useState(true)

    // toggle setado em true quando a máscara está desativada; para false quando a máscada esta ativada
    const [toggle, setToggle] = useState(false)

    const [isAnimeComplete, setIsAnimeComplete] = useState(true)

    const handleOnClick = (ev) => {
        if(isAnimeComplete) {
        setIsAnimeComplete(false)
        // Recalcula quantidade de colunas e linhas para que seja renderizada a animação
        const columns = Math.floor(window.innerWidth/TILESIZE);
        const rows = Math.floor(window.innerHeight/TILESIZE);
        
        /* Caso o usuário tenha clicado sobre algum elemento sobreposto ao grid, ev será evento e não id do tile.
        Assim, isNan(ev) verifica qual a natureza do clique.
        Caso seja evento, o ID do tile clicado é calculado.
        Assim, o efeito é renderizado corretamente mesmo que o usuário tenha clicado em um elemento sobreposto ao grid!
        */
        if(isNaN(ev)) {
            // Converte a posição do clique para o ID do tile
            ev =  Math.floor(ev.clientY/TILESIZE)*columns + Math.floor(ev.clientX/TILESIZE)
        }
        
        // Desliga ou liga a máscara
        setToggle(!toggle)

        // Calcula tempo da animação com base no tamanho da tela
        const delay = window.innerWidth<=640?350:150

        anime({
            targets: '.tile-mask',
            opacity: !toggle?0:1,
            delay: anime.stagger(delay, {
                grid: [columns, rows],
                from: ev
            }),
            complete: ()=>{
                setIsAnimeComplete(true)
            }
        })

        anime({
            targets: '#grid-mask-header',
            opacity: !toggle?0:1,
            delay: anime.stagger(toggle?delay:delay/2, {
                grid: [columns, rows],
                from: ev
            })
        })
    }
    }

    return (
        <section id='home' className="w-full h-screen relative">
                <Loading setIsLoading={setIsLoading}/>
                
                {(!isLoading)
                    &&
                    <GridMask handleOnClick={handleOnClick} toggle={toggle}/>}
                
            {(!isLoading) &&
                <Presentation handleOnClick={handleOnClick} toggle={toggle}/>
            }

        </section>
    )
}

export default Home;