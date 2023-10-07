import { createContext } from "react"

interface ITabsContext {
    currentOpenTab: string
    setOpenTab: (newOpenTab: string) => void
}

const TabsContext = createContext<ITabsContext>({
    currentOpenTab: '',
    setOpenTab: () => {
        console.warn('An implementation for this method has not been provided.')
    },
})

export default TabsContext