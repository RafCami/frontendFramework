import { Suspense, useState } from 'react'
import SettingsContext from './context/settingsContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import StyledContainerWrapper from './stylecomponents/StyledContainerWrapper'
import {Container} from 'react-bootstrap'
import Home from './pages/Home'
import Routing from './Routing'
import LoadingPage from './components/loadingPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: import.meta.env.PROD,
      suspense: true,
      useErrorBoundary: false,
    },
  },

})

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true)
  const [refetchInterval, setRefetchInterval] = useState<number>(300000)


    return (
      <SettingsContext.Provider value={{darkTheme, refetchInterval, toggleDarkTheme: () => setDarkTheme(theme => !theme), setRefetchInterval}}>
        <QueryClientProvider client={queryClient}>
          <StyledContainerWrapper $darkTheme={darkTheme}>
            <Container>
              <Suspense fallback={<LoadingPage />}>
                <Routing />
              </Suspense>
            </Container>
          </StyledContainerWrapper>
        </QueryClientProvider>
      </SettingsContext.Provider>
      ) 
}

export default App
