import {FunctionComponent} from 'react'
import Label from './Label'
import Bar from './Bar'

interface ProgressBarProps {
    percentage: number
    color: string
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({percentage, color}) => {
    return (
        <svg height="80" width="400">
            <Bar percentage={percentage} color={color} />
            <Label percentage={percentage} color={color} />
        </svg>
    )
}

export default ProgressBar