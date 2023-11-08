import { FunctionComponent } from 'react'
import Computer from './Computer'
import IComputer from '../../models/IComputer'

interface ComputerListProps {
    computers: IComputer[]
}

const ComputerList: FunctionComponent<ComputerListProps> = ({ computers }) => {
    return (
        <div className='container'>
            <div className='row'>
                {computers.map((computer) => (
                    <div className='col-4 my-2' key={computer.id}>
                        <Computer computer={computer} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ComputerList