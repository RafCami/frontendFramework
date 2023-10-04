import {FunctionComponent} from 'react'
import NumberGrid from './NumberGrid'
import './numberGrid.css'

interface ExerciseFourProps {
    
}

const ExerciseFour: FunctionComponent<ExerciseFourProps> = () => {
    return (
        <>
            <NumberGrid size={2} />
            <NumberGrid size={3} />
            <NumberGrid size={5} />
        </>
    )
}

export default ExerciseFour