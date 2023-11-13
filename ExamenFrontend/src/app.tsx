import { FunctionComponent, Suspense, useState } from 'react'
import NavigationBar from './components/navigation/NavigationBar'
import Routing from './components/navigation/Routing'
import LoadingPage from './utils/loadingPage'
import { UserContext } from './context/UserContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: import.meta.env.PROD,
            suspense: true,
            useErrorBoundary: false,
        },
    },
})

const App: FunctionComponent = () => {
    const [user, setUser] = useState<string>('admin')

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <UserContext.Provider value={{ user, setUser }}>
                    <NavigationBar />
                    <div className='container'>
                        <Suspense fallback={<LoadingPage />}>
                            <Routing />
                        </Suspense>
                    </div>
                </UserContext.Provider>
            </QueryClientProvider>
        </>
    )
}

export default App
