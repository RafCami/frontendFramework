import { FunctionComponent, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getMaxNumberOfQuestionsForRegion, getQuestions } from '../api/capitalsAPI'
import Configuration from './Configuration'
import Question from './Question'
import IQuestion from '../models/IQuestion'

interface PlayProps {
    
}

const Play: FunctionComponent<PlayProps> = () => {
    const { chosenRegion } = useParams<{ chosenRegion: string }>()
    const maxQuestions = getMaxNumberOfQuestionsForRegion(chosenRegion!)
    const [NQuestions, setNQuestions] = useState<number>(0)
    const [CurrentQuestion, setCurrentQuestion] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [listOfQuestions, setListOfQuestions] = useState<IQuestion[]>(getQuestions(chosenRegion!, 5))

    const StartGame = (questions : number) => {
        setNQuestions(questions)
        setCurrentQuestion(0)
        setScore(0)
        setListOfQuestions(getQuestions(chosenRegion!, questions))
    }
    
    const Answer = (response: string) => {
        if(response === listOfQuestions[CurrentQuestion].city) {
            setScore(score + 1)
        }
        if(CurrentQuestion < NQuestions) {
            setCurrentQuestion(CurrentQuestion + 1)
        } else {
            // End of game
        }
    }
    return (
        <>
            <h1>Test</h1>
            <h2>{chosenRegion}</h2>
            <h3>{maxQuestions}</h3>
            <Configuration maxNQuestions={maxQuestions} startNewGame={StartGame} />
            {(NQuestions >= 5) && (CurrentQuestion < NQuestions) ? 
            <Question country={listOfQuestions[CurrentQuestion].country} answers={listOfQuestions[CurrentQuestion].answers} 
                currentQuestion={CurrentQuestion} maxQuestions={NQuestions} score={score} response={Answer} />
            : <></>}
            {(NQuestions >= 5) && (CurrentQuestion === NQuestions) ?
                <h1>End of game</h1>
            : <></>}
        </>
    )
}

export default Play