import { FunctionComponent, useState } from 'react'
import { addScore, getLastHighscoreName } from '../../api/highscoresAPI'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface ResultProps {
    score : number
    maxQuestions : number
    region : string
}

const Result: FunctionComponent<ResultProps> = ({ score, maxQuestions, region }) => {
    const [playerName, setPlayerName] = useState<string>(getLastHighscoreName())
    const [savedScore, setSavedScore] = useState<boolean>(false)

    const AddToHighscores = () => {
        console.log(playerName)
        addScore(maxQuestions, score, region, playerName)
        setSavedScore(true)
    }


    return (
        <>
            {!savedScore ? (
            <>
                <Row>
                    <Col><h3>The end!</h3></Col>
                </Row>
                <Row>
                    <Col><h4>You've scored {score}/{maxQuestions}</h4></Col>
                </Row>
                <Row>
                    <Col className='d-grid'><input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} /></Col>
                </Row>
                <Row className='mt-3'>
                    <Col className='d-grid'><Button size="lg" disabled={!playerName.trim()} onClick={() => AddToHighscores()}>Add to highscores!</Button></Col>
                </Row>
            </>
            ) : (
                <>
                    <Row>
                        <Col className='text-center'>
                            <h1>Your score has been saved!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <Link to={`/highscores/${region}`}>Highscores</Link>
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
}

export default Result