import { FunctionComponent, PropsWithChildren } from 'react'
import TabListContentContainer from './TabListContentContainer'

interface TabListProps extends PropsWithChildren {
    
}

const TabList: FunctionComponent<TabListProps> = ({children}) => {
    return (
        <TabListContentContainer>
            {children}
        </TabListContentContainer>
    )
}

export default TabList