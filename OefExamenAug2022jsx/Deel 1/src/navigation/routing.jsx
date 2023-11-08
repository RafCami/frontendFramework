import {Outlet, Route, Routes} from 'react-router-dom'
import Surveys from '../pages/surveys/surveys.jsx'
import SurveyDetail from '../pages/surveys/detail/surveyDetail.jsx'

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Outlet/>}>
                <Route index element={<Surveys/>}/>
                <Route path={':id'} element={<SurveyDetail/>}/>
            </Route>
        </Routes>
    )
}

export default Routing
