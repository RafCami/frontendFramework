import { Suspense, useState } from "react"
import NavigationBar from "./Navigation/NavigationBar"
import Routing from "./Navigation/Routing"
import LoadingPage from "./utils/loadingPage"
import IUser from "./models/IUser"
import UserContext from "./context/UserContext"


function App() {
  const [loggedinUser, setLoggedinUser] = useState<IUser | undefined>(undefined)

  return (
    <>
    <UserContext.Provider value={{loggedinUser, setLoggedinUser}}>
      <NavigationBar/>
      <Suspense fallback={<LoadingPage  />}>
        <div className="container">
          <Routing/>
        </div>
      </Suspense>
      </UserContext.Provider>
    </>
  )
}

export default App
