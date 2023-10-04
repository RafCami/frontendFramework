import {FunctionComponent} from 'react'

interface BarProps {
    percentage: number
    color: string
}

const Bar: FunctionComponent<BarProps> = ({percentage, color}) => {
    const d = 'M20 55 l'+ (3.6 * percentage) +' 0'
    return (
        <>
            <g fill="none" stroke="lightgrey" strokeWidth="25">
                <path strokeLinecap="round" d="M20 55 l360 0" />
            </g>
            <g fill="none" stroke={color} strokeWidth="25">
                <path strokeLinecap="round" d={d} />
            </g>
        </>
    )
}

export default Bar