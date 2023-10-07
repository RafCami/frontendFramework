import {FunctionComponent} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import ChevronBtn from './chevronBtn'

const TitleContainer = styled.div`
    font-family: "Lucida Sans", Monaco, monospace;
    font-size: 3rem;
    letter-spacing: 3px;
    color: #3A5D9B;
    font-weight: 300;
    font-style: oblique;
    line-height: 1.2;
`

interface ExerciseTitleProps {
    title : string
    isOpen : boolean
    toggleOpen : () => void
}

const ExerciseTitle: FunctionComponent<ExerciseTitleProps> = ({title, isOpen, toggleOpen}) => {
    const openBtn = <FontAwesomeIcon icon={faChevronUp}/>
    const closedBtn = <FontAwesomeIcon icon={faChevronDown}/>



    return (
        <TitleContainer>
            <ChevronBtn onClick={toggleOpen}>{isOpen ? openBtn : closedBtn}</ChevronBtn> {title}
        </TitleContainer>
    )
}

export default ExerciseTitle