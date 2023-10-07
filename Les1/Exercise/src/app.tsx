import { FunctionComponent, ReactNode, useState } from 'react'
import Exercise from './Exercise/Exercise'
import ExerciseOne from './Exercise1/ExerciseOne'
import ExerciseTwo from './Exercise2/ExerciseTwo'
import ExerciseThree from './Exercise3/ExerciseThree'
import ExerciseFour from './Exercise4/ExerciseFour'
import ExerciseFive from './Exercise5/ExerciseFive'
import ExerciseSix from './exerciseSix/exerciseSix'
import ExerciseSeven from './exerciseSeven/exerciseSeven'
import ExerciseEight from './exerciseEight/exerciseEight'
import ExerciseNine from './exerciseNine/ExerciseNine'
import OpenCloseBtn from './Exercise/openCloseBtn'

interface ExerciseData {
    title: string
    component: ReactNode
    background?: string
    open?: boolean
}

interface appProps {
    
}

const App: FunctionComponent<appProps> = () => {
    const exercises : ExerciseData[] = [
        {title: 'Exercise1: Multiplication Table', component: <ExerciseOne />},
        {title: 'Exercise2: Rater', component: <ExerciseTwo />},
        {title: 'Exercise3: ProgressBar', component: <ExerciseThree />},
        {title: 'Exercise4: Number Grid', component: <ExerciseFour />},
        {title: 'Exercise5: Comment Card', component: <ExerciseFive />},
        {title: 'Exercise6: Calculator', component: <ExerciseSix />},
        {title: 'Exercise7: BMI Calculator', component: <ExerciseSeven />},
        {title: 'Exercise8: Carousel', component: <ExerciseEight />},
        {title: 'Exercise9: Tabs', component: <ExerciseNine />},
    ]
    const [openExercises, setOpenExercises] = useState<boolean[]>(Array(exercises.length).fill(true))
    
    const toggleOpen = (index: number) => {
        const newOpenExercises = [...openExercises]
        newOpenExercises[index] = !newOpenExercises[index]
        setOpenExercises(newOpenExercises)
    }

    return (
        <>
            <OpenCloseBtn onClick={() => {setOpenExercises(Array(exercises.length).fill(true))}}>Open all exercises</OpenCloseBtn>
            <OpenCloseBtn onClick={() => {setOpenExercises(Array(exercises.length).fill(false))}}>Close all exercises</OpenCloseBtn>
            
            {exercises.map((e, i) => (
                <Exercise title={e.title} key={i} toggleOpen={() => {toggleOpen(i)}} 
                          background={i % 2 === 0 ? undefined : '#77EEEE'} isOpen={openExercises[i]}>
                    {e.component}
                </Exercise>
            ))}
        </>
    )
}

export default App