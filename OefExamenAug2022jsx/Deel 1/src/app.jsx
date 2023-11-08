import {useState} from 'react'
import LanguageContext from './context/languageContext.jsx'
import Routing from './navigation/routing.jsx'
import Navigation from './navigation/navigation.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            useErrorBoundary: false,
            refetchOnWindowFocus: import.meta.env.PROD
        }
    }
})

const App = () => {
    const [language, setLanguage] = useState('en')

    return (
        <QueryClientProvider client={queryClient}>
            <LanguageContext.Provider value={{language, setLanguage}}>
                <Navigation/>

                <div className={'container'}>
                    <Routing/>
                </div>
            </LanguageContext.Provider>
        </QueryClientProvider>
    )
}

export default App
