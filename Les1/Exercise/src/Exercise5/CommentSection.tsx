import {FunctionComponent} from 'react'
import Author from './Author'
import CommentContent from './CommentContent'

interface CommentSectionProps {
    firstName: string,
    lastName: string,
    content: string,
}

const CommentSection: FunctionComponent<CommentSectionProps> = (props) => {
    const {firstName, lastName, content} = props
    return (
        <div className='commentSection'>
            <Author firstName={firstName} lastName={lastName} />
            <CommentContent content={content} />
        </div>
    )
}

export default CommentSection