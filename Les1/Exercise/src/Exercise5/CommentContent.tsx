import {FunctionComponent, useContext} from 'react'
import styled from 'styled-components'
import { CommentContext } from './ExerciseFive'

interface CommentContentProps {
    content: string,
    openKey: string,
}

const ReadMore = styled.div`
    font-size: 110%;
    text-decoration: underline;
    color: #6b6b6f;
    cursor: pointer;
    margin: 0;
` 


const CommentContent: FunctionComponent<CommentContentProps> = ({content, openKey}) => {
    const {currentOpenKey, toggleOpenKey} = useContext(CommentContext)
    const isOpen = openKey === currentOpenKey

    return (
        <div className='content'>
            {isOpen ? content : content.substring(0, 31)}
            <ReadMore onClick={() => toggleOpenKey(openKey)}>{isOpen ? "Read less" : "Read more"}</ReadMore>
        </div>
    )
}

export default CommentContent