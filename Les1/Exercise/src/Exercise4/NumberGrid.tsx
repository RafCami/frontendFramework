import {FunctionComponent} from 'react'

interface NumberGridProps {
    size: number
}

const NumberGrid: FunctionComponent<NumberGridProps> = ({size}) => {
    const output = []
    for (let i = 0; i < size; i++) {
        const row = []
        for (let j = 0; j < size; j++){
            row.push(<button className='square' key={(i * size + j + 1)}>{i * size + j + 1}</button>)
        }
        output.push(<div className='grid-row' key={i}>{row}</div>)
    }

    return (
        <div className='grid'>
            {output}
        </div>
    )
}

export default NumberGrid