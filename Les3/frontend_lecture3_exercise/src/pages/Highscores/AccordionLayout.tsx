import { FunctionComponent, MouseEvent } from 'react'
import { Accordion, ListGroup } from 'react-bootstrap'
import { getAllRegions } from '../../api/capitalsAPI'
import { getHighscoresForLocation } from '../../api/highscoresAPI'

interface AccordionLayoutProps {
    region?: string
    setRegion: (newRegion: string) => void
}

const AccordionLayout: FunctionComponent<AccordionLayoutProps> = ({ region, setRegion }) => {
    const selectAccordionItem = (evt: MouseEvent<HTMLElement>, newRegion: string): void => {
        setRegion(newRegion)
        if (evt.target instanceof HTMLElement) {
            evt.target.blur()
        }
    }
    
    const accordion = getAllRegions().map(r => {
        return (
            <Accordion.Item eventKey={r} key={r} onClick={evt => selectAccordionItem(evt, r)}>
                <Accordion.Header>{r}</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        {getHighscoresForLocation(r).map((score) => {
                            return (
                                <ListGroup.Item key={score.id}>{score.name} - {score.score}/{score.nbQuestions} - {Math.round(score.score / score.nbQuestions * 100)}%</ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        )
    })

    return (
        <>
            <h1>Accordion Layout</h1>
            <Accordion activeKey={region ? region : ""} >
                {accordion}
            </Accordion>
        </>
    )
}

export default AccordionLayout