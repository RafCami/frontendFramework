import { FunctionComponent } from 'react'
import ICampus from '../models/ICampus'

interface ProgramProps {
    name: string
    day: boolean
    campus: ICampus
    english: boolean
}

const Program: FunctionComponent<ProgramProps> = ({ name, day, campus, english }) => {
    return (
        <div className='program'>
            <div>{name}</div>
            <div>{campus.name}</div>
            <div>{day? 'Day' : 'Evening'}</div>
            <div>{english? 'Engels' : 'Nederlands'}</div>
        </div>
    )
}

export default Program