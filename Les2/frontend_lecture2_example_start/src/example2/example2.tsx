import {FunctionComponent} from 'react'
import {ISubject} from '../models/ISubject.ts'
import Subject from './subject.tsx'
import AccordionItem from './accordionItem.tsx'
import Accordion from './accordion.tsx'

interface Example2Props {
    subjects: ISubject[]
}

const Example2: FunctionComponent<Example2Props> = ({subjects}) => {

    // const output = []
    // const output2 = subjects.map((subject) => <Subject {...subject} key={subject.id}/>)
    // for (const subject of subjects) {
        //     output.push(<Subject {...subject} key={subject.id}/>)
        // }
    const output = []
    for (const subject of subjects) {
        output.push((
                <AccordionItem key={subject.id} title={subject.name} openKey={subject.id}>
                    <Subject {...subject}/>
                </AccordionItem>
            ),
        )
    }

    return (
        <>
            <Accordion>
                {output}
            </Accordion>
        </>
    )
}

export default Example2
