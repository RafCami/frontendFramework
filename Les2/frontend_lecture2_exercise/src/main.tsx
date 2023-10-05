import ReactDOM from 'react-dom/client'
import './index.css'
import './style.css'
import ExerciseSix from './exerciseSix/exerciseSix.tsx'
import Exercise from './exercise/Exercise.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <Exercise title={'Exercise6: Calculator'}>
    <ExerciseSix />
  </Exercise>
  </>
)
