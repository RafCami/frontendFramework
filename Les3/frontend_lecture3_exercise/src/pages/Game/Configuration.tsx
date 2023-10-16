import { FunctionComponent, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

interface ConfigurationProps {
    maxNQuestions: number
    startNewGame: (nQuestions: number) => void
}

const Configuration: FunctionComponent<ConfigurationProps> = ({maxNQuestions, startNewGame}) => {
    const [nQuestions, setNQuestions] = useState<number>(5)

    return (
        <>
            <Row>
                <Col><Button variant="primary" onClick={() => setNQuestions(x => Math.max(x-1, 5))}>-</Button></Col>
                <Col className='text-center'><Form.Label>Number of questions: {nQuestions}</Form.Label></Col>
                <Col className='text-end'><Button variant="primary" onClick={() => setNQuestions(x => Math.min(x+1, maxNQuestions))}>+</Button></Col>
            </Row>
            <Row>
                <Form.Range value={nQuestions} min={5} max={maxNQuestions} onChange={(evt) => setNQuestions(Number(evt.target.value))} />
            </Row>
            <Row className='mt-3'>
                <Col className='d-grid'><Button size="lg" onClick={() => startNewGame(nQuestions)}>Start a new game!</Button></Col>
            </Row>
        </>
    )
}

export default Configuration