import '../styles/MsgNotification.scss'

import { FaCheckCircle } from 'react-icons/fa'
import { FaExclamationCircle} from 'react-icons/fa'


interface MsgProp {
    color: string
    typeMsg: string
    title: string
    subtitle: string
}

const MsgNotification = ({color, typeMsg, title, subtitle}: MsgProp) => {
  return (
    <div className='container-notification' style={{borderColor: color}}>
        {typeMsg !== 'error'? <FaCheckCircle color={color}/> : <FaExclamationCircle color={color}/>}
        <div className='container-msg'>
            <h2>{title}</h2>
            <p>{subtitle}</p>   
        </div>
    </div>
  )
}

export default MsgNotification
