import { Suspense, useState } from 'react'
import NavigationBar from './Navigation/NavigationBar'
import LoadingPage from './utils/loadingPage'
import UserContext from './context/UserContext'
import { getCurrentUser, setCurrentUser } from './api/userApi'
import Routing from './Navigation/Routing'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: import.meta.env.PROD,
      suspense: true,
      useErrorBoundary: false
    }
  }
})

function App() {
  const [loggedinUser, _setLoggedinUser] = useState(getCurrentUser())

  const setLoggedinUser = (user) => {
    _setLoggedinUser(user)
    setCurrentUser(user).then()
  }

  return (
    <>
    <UserContext.Provider value={{loggedinUser, setLoggedinUser}}>
      <QueryClientProvider client={queryClinet}>
        <NavigationBar/>
        <Suspense fallback={<LoadingPage  />}>
          <div className="container">
            <Routing />
          </div>
        </Suspense>
      </QueryClientProvider>
      </UserContext.Provider>
    </>
  )
}

export default App
