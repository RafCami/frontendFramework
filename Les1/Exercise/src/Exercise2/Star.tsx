import {FunctionComponent} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar as starFull} from '@fortawesome/free-solid-svg-icons'
import {faStar as starOutline} from '@fortawesome/free-regular-svg-icons'

interface StarProps {
    full: boolean
}

const Star: FunctionComponent<StarProps> = ({full}) => {
    const volleSter = <FontAwesomeIcon icon={starFull}/>
    const legeSter = <FontAwesomeIcon icon={starOutline}/>

    return (
        full ? volleSter : legeSter
    )
}

export default Star