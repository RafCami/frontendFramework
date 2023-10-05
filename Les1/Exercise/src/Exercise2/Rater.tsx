import {FunctionComponent} from 'react'
import Star from './Star'
import Label from './Label'

interface RaterProps {
    rating: number
    max: number
}

const Rater: FunctionComponent<RaterProps> = ({rating, max}) => {
    const stars = []
    for (let i = 0; i < max; i++) {
        stars.push(<Star full={i < rating} key={i}/>)
    }
    return (
        <div className='rater'>
            {stars}<br />
            <Label score={rating / max}/>
        </div>
    )
}

export default Rater