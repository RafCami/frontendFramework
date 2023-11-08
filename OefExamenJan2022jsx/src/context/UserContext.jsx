import { createContext } from 'react'

const UserContext = createContext({
    loggedinUser: undefined,
    setLoggedinUser: (user) => {
        console.warn('An implementation for this method has not been provided.')
    }
})

export default UserContext
