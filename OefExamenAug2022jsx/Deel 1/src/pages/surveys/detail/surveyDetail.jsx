import {useParams} from 'react-router-dom'
import LoadingPage from '../../../utils/loadingPage.jsx'
import {Suspense} from 'react'
import {useGetAllSurveys} from '../../../api/surveyAPI.js'
import {useGetAllQuestionsForSurvey} from '../../../api/questionAPI.js'
import SingleLineQuestion from './singleLineQuestion.jsx'
import MultiLineQuestion from './multiLineQuestion.jsx'
import MultipleSelectQuestion from './multipleSelectQuestion.jsx'

const SurveyDetailContents = () => {
    const {id} = useParams()
    const {data: surveys} = useGetAllSurveys()
    const name = surveys.find(s => s.id === id)?.name
    const {data: questions} = useGetAllQuestionsForSurvey({id})

    const getQuestionComponent = (question) => {
        if (question.type === 'single-line-answer') {
            return <SingleLineQuestion key={question.id} {...question}/>
        } else if (question.type === 'multi-line-answer') {
            return <MultiLineQuestion key={question.id} {...question}/>
        } else {
            return <MultipleSelectQuestion key={question.id} {...question}/>
        }
    }

    return (
        <div>
            <h1>{name}</h1>

            {questions.map(q => getQuestionComponent(q))}
        </div>
    )
}

const SurveyDetail = () => {

    return (
        <Suspense fallback={<LoadingPage/>}>
            <SurveyDetailContents/>
        </Suspense>
    )
}

export default SurveyDetail
