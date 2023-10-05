import ReactDOM from 'react-dom/client'
// import './index.css'
import './style.css'
import ExerciseSix from './exerciseSix/exerciseSix.tsx'
import ExerciseSeven from './exerciseSeven/exerciseSeven.tsx'
import Exercise from './exercise/Exercise.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Exercise title={'Exercise6: Calculator'}>
      <ExerciseSix />
    </Exercise>
    <Exercise title={'Exercise7: BMI Calculator'}>
      <ExerciseSeven />
    </Exercise>
  </>
)
