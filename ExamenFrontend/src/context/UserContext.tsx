import {Dispatch, SetStateAction, createContext} from 'react'

export interface IUserContext {
    user: string
    setUser: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext<IUserContext>({
    user: 'admin',
    setUser: (): void => {
        console.warn('An implementation for this method has not been provided.')
    },
})
