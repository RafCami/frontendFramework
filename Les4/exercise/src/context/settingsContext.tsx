import { createContext } from 'react'
import { ISettingsContext } from '../models/ISettingsContext'

const SettingsContext = createContext<ISettingsContext>({
    darkTheme: true,
    refetchInterval: 10000,
    toggleDarkTheme: () => {
        console.warn('not implemented')
    },
    setRefetchInterval: (newRefetchInterval: number) => {
        console.warn('not implemented')
    },
})

export default SettingsContext
