import {FunctionComponent} from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'

const E3Container = styled.div`
    flex-direction: column;
`
interface ExerciseThreeProps {
    
}

const ExerciseThree: FunctionComponent<ExerciseThreeProps> = () => {
    return (
        <E3Container className='exercise'>
            <ProgressBar percentage={75} color='#ce4b99' />
            <ProgressBar percentage={15} color='#ce1b29' />
            <ProgressBar percentage={65} color='#125b69' />
        </E3Container>
    )
}

export default ExerciseThree