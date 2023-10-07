import { FunctionComponent, useContext } from 'react'
import TabButton from './tabButton'
import TabsContext from './TabsContext'

interface TabProps {
    name: string
    id?: string
}

const Tab: FunctionComponent<TabProps> = ({name, id}) => {
    const {currentOpenTab, setOpenTab} = useContext(TabsContext)

    if (!id) {
        id = name
    }
    
    return (
        <TabButton $isActive={id === currentOpenTab} onClick={() => {setOpenTab(id as string)}}>
            {name}
        </TabButton>
    )
}

export default Tab