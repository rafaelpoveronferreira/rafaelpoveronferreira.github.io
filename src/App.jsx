import Contact from './views/contact/index'
import Home from './views/home/index'
import Projects from './views/projects/index'
import resizeListener from "./utils/resizeListener";
import { useEffect, useState } from 'react';

function App() {
  const [shouldScrollonResize, toggleShouldScrollonResize] = useState(true)
  // Essa função corrige a posição do scroll a cada resize, evitando alinhamentos incorretos
  //useEffect(()=>{
    resizeListener()
  //},[shouldScrollonResize])
  

  return (
    <div id='app-wrapper'>
      <Home />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
