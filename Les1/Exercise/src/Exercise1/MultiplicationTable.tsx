import {FunctionComponent} from 'react'
import Header from './Header'
import Row from './Row'

interface MultiplicationTableProps {
    table: number
}

const MultiplicationTable: FunctionComponent<MultiplicationTableProps> = ({table}) => {
    const rows = []
    for (let index = 1; index < 11; index++) {
        rows.push(<Row factor1={index} factor2={table} key={(index * table)}  />)
    }

    return (
        <div className='table'>
            <Header table={table} />
            {rows}
        </div>
    )
}

export default MultiplicationTable