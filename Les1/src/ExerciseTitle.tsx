import {CSSProperties, FunctionComponent, PropsWithChildren} from 'react'

interface ExerciseTitleProps extends PropsWithChildren {
    title: string,
}

const Exercise: FunctionComponent<ExerciseTitleProps> = ({children, title}) => {
    const exerciseStyle: CSSProperties = {
        boxShadow: '7px 2px 8px 1px rgba(18,89,46,0.67)',
        background: background ?? '#EEEEEE',
        minHeight: '7em',
        padding: '.5em',
        margin: '1.5em .5em',
    }

    return (
        <div style={exerciseStyle}>
            {children}
        </div>
    )
}

export default ExerciseTitle