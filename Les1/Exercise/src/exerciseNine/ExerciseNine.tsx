import { FunctionComponent } from 'react'
import Tabs from './tabs'
import TabList from './TabList'
import TabPanel from './TabPanel'
import Tab from './Tab'
import SomeJSXContent from './SomeJSXContent'

interface ExerciseNineProps {
    
}

const ExerciseNine: FunctionComponent<ExerciseNineProps> = () => {
    const tabs = []
    const tabsContent = []

    for (let i = 0; i < 5; i++) {
        tabs.push(<Tab key={i} name={`Tab ${i+1}`} id={`tab${i}`} />)
        tabsContent.push(<TabPanel id={`tab${i}`} key={i}><SomeJSXContent><h1>Tab {`${i+1}`} content</h1></SomeJSXContent></TabPanel>)
    }
    return (
        <>
            <Tabs defauklOpenTab={tabs[0].props.id}>
                <TabList>
                    {tabs}
                </TabList>
                {tabsContent}
            </Tabs>
        </>
    )
}

export default ExerciseNine