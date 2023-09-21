// Importeren van react-dom, de bibliotheek die het renderen mogelijk maakt.
import ReactDOM from 'react-dom/client'
import './style.css'
import Exercise from './Exercise/Exercise'
import ExerciseOne from './Exercise1/ExerciseOne'
import ExerciseTwo from './Exercise2/ExerciseTwo'
import ExerciseThree from './Exercise3/ExerciseThree'

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
      <h1>Test</h1>
    </Exercise>
    <Exercise title={'Exercise5: Comment Card'}>
      <h1>Test</h1>
    </Exercise>
  </>
)
