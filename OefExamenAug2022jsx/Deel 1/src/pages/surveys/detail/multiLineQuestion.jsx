import {useParams} from 'react-router-dom'
import {useDeleteQuestion} from '../../../api/questionAPI.js'

const MultiLineQuestion = ({title, id}) => {
    const {id: surveyId} = useParams()
    const deleteQuestionMutation = useDeleteQuestion(surveyId)

    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <textarea disabled />
            </div>
            <div>
                <button onClick={() => deleteQuestionMutation.mutate({questionId: id})}>X</button>
            </div>
        </div>
    )
}

export default MultiLineQuestion
