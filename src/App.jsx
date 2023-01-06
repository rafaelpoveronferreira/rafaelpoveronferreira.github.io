import Contact from './views/contact/index'
import Home from './views/home/index'
import Projects from './views/projects/index'
import resizeListener from "./utils/resizeListener";
import LanguageSelect from './components/LanguageSelect';

function App() {
  resizeListener()

  return (
      <div id='app-wrapper'>
        <LanguageSelect id='language-option'/>
        <Home />
        <Projects />
        <Contact />
      </div>  
  )
}

export default App
