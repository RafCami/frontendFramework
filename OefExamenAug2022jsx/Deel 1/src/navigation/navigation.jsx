import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import LanguageContext from '../context/languageContext.jsx'

const Navigation = () => {
    const {language, setLanguage} = useContext(LanguageContext)

    return (
        <div className={'navbar'}>
            <ul>
                <li>
                    <NavLink to="/">{language === 'en' ? 'My surveys' : 'Mijn vragenlijsten'}</NavLink>
                </li>
                <li>
                    <select value={language} onChange={evt => setLanguage(evt.currentTarget.value)}>
                        <option value={'en'}>English</option>
                        <option value={'nl'}>Nederlands</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
