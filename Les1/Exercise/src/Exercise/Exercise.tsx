import {CSSProperties, FunctionComponent, PropsWithChildren} from 'react'
import ExerciseTitle from './ExerciseTitle'


interface ExerciseProps extends PropsWithChildren {
    title: string
    background?: string
    isOpen: boolean
    toggleOpen: () => void
}

const Exercise: FunctionComponent<ExerciseProps> = ({children, title, background, isOpen, toggleOpen}) => {
    const exerciseStyle: CSSProperties = {
        boxShadow: '7px 2px 8px 1px rgba(18,89,46,0.67)',
        background: background ?? '#EEEEEE',
        minHeight: '7em',
        padding: '.5em',
        margin: '1.5em .5em',
    }

    return (
        <div style={exerciseStyle}>
            <ExerciseTitle title={title} isOpen={isOpen} toggleOpen={toggleOpen} />
            {isOpen && children}
        </div>
    )
}

export default Exercise