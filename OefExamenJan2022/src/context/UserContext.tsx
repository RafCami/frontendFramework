import { SetStateAction, createContext, Dispatch } from 'react'
import IUser from '../models/IUser'

interface UserContextProps {
    loggedinUser: IUser | undefined,
    setLoggedinUser: Dispatch<SetStateAction<IUser | undefined>>
}

const UserContext = createContext<UserContextProps>({
    loggedinUser: undefined,
    setLoggedinUser: (): void => {
        console.warn('An implementation for this method has not been provided.')
    }
})

export default UserContext
