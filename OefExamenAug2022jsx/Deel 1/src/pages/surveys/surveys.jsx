import {Suspense, useContext, useState} from 'react'
import LanguageContext from '../../context/languageContext.jsx'
import {useCreateSurvey, useGetAllSurveys} from '../../api/surveyAPI.js'
import Survey from './survey.jsx'
import LoadingPage from '../../utils/loadingPage.jsx'
import LoadingPart from '../../utils/loadingPart.jsx'

const SurveysContent = () => {
    const {language} = useContext(LanguageContext)
    const {data: surveys} = useGetAllSurveys()
    const createSurveyMutation = useCreateSurvey()
    const [newSurveyName, setNewSurveyName] = useState('')

    const createNewSurvey = () => {
        createSurveyMutation.mutate({name: newSurveyName})
        setNewSurveyName('')
    }

    return (
        <>
            <h1>{language === 'en' ? 'My Surveys' : 'Mijn vragenlijsten'}</h1>

            <div className={'create-survey-form'}>
                <input value={newSurveyName} onChange={e => setNewSurveyName(e.currentTarget.value)}/>
                <button disabled={newSurveyName === ''} onClick={createNewSurvey}>
                    {language === 'en' ? 'Create new survey' : 'Nieuwe vragenlijst aanmaken'}
                    {createSurveyMutation.isLoading && <LoadingPart/>}
                </button>
            </div>

            {surveys.map(s => <Survey key={s.id} {...s}/>)}
        </>
    )
}

const Surveys = () => {
    return (
        <Suspense fallback={<LoadingPage/>}>
            <SurveysContent/>
        </Suspense>
    )
}

export default Surveys
