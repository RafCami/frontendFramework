import { FunctionComponent } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

interface QuestionProps {
    country: string
    answers: string[]
    currentQuestion: number
    maxQuestions: number
    score: number
    response: (response: string) => void
}

const Question: FunctionComponent<QuestionProps> = ({country, answers, currentQuestion, maxQuestions, score, response}) => {
    return (
        <>
            <Row>
                <Col><h3>Question: {currentQuestion + 1}/{maxQuestions}</h3></Col>
                <Col className='text-end'><h3>Score: {score}/{maxQuestions}</h3></Col>
            </Row>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title>What is the capital of {country}?</Card.Title>
                        {answers.map(answer => (
                            <div className='d-grid mt-1'>
                                <Button variant="primary" onClick={() => response(answer)}>{answer}</Button>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default Question