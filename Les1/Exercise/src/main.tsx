// Importeren van react-dom, de bibliotheek die het renderen mogelijk maakt.
import ReactDOM from 'react-dom/client'
import './style.css'
import Exercise from './Exercise/Exercise'
import ExerciseOne from './Exercise1/ExerciseOne'
import ExerciseTwo from './Exercise2/ExerciseTwo'
import ExerciseThree from './Exercise3/ExerciseThree'
import ExerciseFour from './Exercise4/ExerciseFour'
import ExerciseFive from './Exercise5/ExerciseFive'
import ExerciseSix from './exerciseSix/exerciseSix'
import ExerciseSeven from './exerciseSeven/exerciseSeven'

// Aanmaken van de root voor de React applicatie.
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
  <>
    <Exercise title={'Exercise1: Multiplication Table'}>
      <ExerciseOne />
    </Exercise>
    <Exercise title={'Exercise2: Rater'} background='#77EEEE'>
      <ExerciseTwo />
    </Exercise>
    <Exercise title={'Exercise3: ProgressBar'}>
      <ExerciseThree />
    </Exercise>
    <Exercise title={'Exercise4: Number Grid'} background='#77EEEE'>
      <ExerciseFour />
    </Exercise>
    <Exercise title={'Exercise5: Comment Card'}>
      <ExerciseFive />
    </Exercise>
    <Exercise title={'Exercise6: Calculator'}>
      <ExerciseSix />
    </Exercise>
    <Exercise title={'Exercise7: BMI Calculator'}>
      <ExerciseSeven />
    </Exercise>
  </>
)
