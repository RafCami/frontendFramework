import { FunctionComponent, PropsWithChildren, useState } from 'react'
import TabsContext from './TabsContext'

interface TabsProps extends PropsWithChildren {
    defauklOpenTab?: string
}

const Tabs: FunctionComponent<TabsProps> = ({children, defauklOpenTab}) => {
    const [currentOpenTab, setOpenTab] = useState<string>(defauklOpenTab || '')

    return (
        <TabsContext.Provider value={{currentOpenTab, setOpenTab}}>
            {children}
        </TabsContext.Provider>
    )
}

export default Tabs