import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Arrow = ({icon, link}) => {
    return (
        <a href={link}>
            <FontAwesomeIcon icon={icon} color='rgba(255,255,255,0.5)' 
                size="2xl" className='z-50 opacity-50 hover:opacity-100 duration-300'/>
        </a>
    )
}

export default Arrow;
