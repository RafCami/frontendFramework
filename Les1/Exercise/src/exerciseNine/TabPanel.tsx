import { FunctionComponent, PropsWithChildren, useContext } from 'react'
import TabPanelContentContainer from './tabPanelContentContainer'
import TabsContext from './TabsContext'

interface TabPanelProps extends PropsWithChildren {
    id: string
}

const TabPanel: FunctionComponent<TabPanelProps> = ({children, id}) => {
    const {currentOpenTab, setOpenTab} = useContext(TabsContext)
    
    return (
        <TabPanelContentContainer $isActive={id === currentOpenTab} onClick={() => {setOpenTab(id)}}>
            {children}
        </TabPanelContentContainer>
    )
}

export default TabPanel