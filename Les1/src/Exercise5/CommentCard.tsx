import {FunctionComponent} from 'react'
import Avatar from './Avatar'
import CommentSection from './CommentSection'

interface CommentCardProps {
    id: string,
    firstName: string,
    lastName: string,
    avatar: string,
    content: string,
}

const CommentCard: FunctionComponent<CommentCardProps> = (props) => {
    const {firstName, lastName, avatar, content} = props
    return (
        <div className='card'>
            <Avatar avatar={avatar} />
            <CommentSection firstName={firstName} lastName={lastName} content={content} />
        </div>
    )
}

export default CommentCard