import {useParams} from 'react-router-dom'
import {useDeleteQuestion} from '../../../api/questionAPI.js'

const SingleLineQuestion = ({title, id}) => {
    const {id: surveyId} = useParams()
    const deleteQuestionMutation = useDeleteQuestion(surveyId)

    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <input disabled/>
            </div>
            <div>
                <button onClick={() => deleteQuestionMutation.mutate({questionId: id})}>X</button>
            </div>
        </div>
    )
}

export default SingleLineQuestion
