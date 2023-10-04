import {FunctionComponent} from 'react'
import {ISubject} from '../models/ISubject.ts'
import Subject from './subject.tsx'

interface Example2Props {
    subjects: ISubject[]
}

const Example2: FunctionComponent<Example2Props> = ({subjects}) => {

    const output = []
    for (const subject of subjects) {
        output.push(<Subject {...subject}/>)
    }

    return (
        <>
            {output}
        </>
    )
}

export default Example2
