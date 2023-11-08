import {createContext} from 'react'

const LanguageContext = createContext({
    language: 'en',
    setLanguage: (language) => {
        console.warn(`No implementation available for setLanguage, please provide one.`)
    }
})

export default LanguageContext
