import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleChevronUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <section id='contact' className="w-full h-screen flex flex-col justify-center items-center relative">
            <a href="#projects" className='absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 z-50'>
                <FontAwesomeIcon 
                icon={faCircleChevronUp} color='rgba(255,255,255,0.5)' size="2xl" className='opacity-50 hover:opacity-100 duration-300'/>
            </a>
            <h2 className="absolute top-1/4 text-center text-fading-white-30 w-full h-20 select-none duration-300">
                Vamos conversar?</h2>
            <div className="absolute top-1/3 left-1/2 
                -translate-x-1/2 sm:translate-x-0 translate-y-1/4 sm:translate-y-0
                scale-125 sm:scale-100
                sm:static sm:w-full sm:h-full 
                grid grid-cols-2 gap-12 
                sm:flex sm:justify-center sm:items-center sm:gap-24">
                <a href="https://www.linkedin.com/in/rafael-poveron-ferreira" target={'_blank'}>
                    <FontAwesomeIcon icon={faLinkedin} size='6x' 
                        className='opacity-80 hover:opacity-100 text-black hover:text-[#0077b5] active:text-[#0077b5] hover:scale-105 active:scale-105 duration-200'/>
                </a>
                <a href="https://github.com/rafaelpoveronferreira" target={'_blank'}>
                    <FontAwesomeIcon icon={faGithub} size='6x'
                        className='opacity-80 hover:opacity-100 text-black hover:text-fading-white-50 active:text-fading-white-50 hover:scale-105 active:scale-105 duration-200'/>
                </a>
                <a href="https://www.instagram.com/rafaelpoveron/" target={'_blank'}>
                    <FontAwesomeIcon icon={faInstagram} size='6x'
                        className='opacity-80 hover:opacity-100 text-black hover:text-[#d6249f] active:text-[#d6249f] hover:scale-105 active:scale-105 duration-200'/>
                </a>
                <a href="mailto:poveron7@gmail.com" target={'_blank'}>
                    <FontAwesomeIcon icon={faEnvelope} size='6x'
                        className='opacity-80 hover:opacity-100 text-black hover:text-[#c71610] active:text-[#c71610] hover:scale-105 active:scale-105 duration-200'/>
                </a>
                <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8169547H1" target={'_blank'}>
                    <span className='text-6xl font-black select-none opacity-80 hover:opacity-100 text-black hover:text-[#0077b5] active:text-[#0077b5] hover:scale-105 active:scale-105 duration-200'>CV</span>
                </a>
            </div>
            
        </section>
    )
}

export default Contact;