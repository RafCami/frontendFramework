import { FunctionComponent, useContext } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import StyledTabsWrapper from '../stylecomponents/StyledTabsWrapper'
import SettingsContext from '../context/settingsContext'

const endpoints = [
    {
        id: 0,
        title: 'Top Stories',
        endpoint: 'top',
    },
    {
        id: 1,
        title: 'Ask Hacker News',
        endpoint: 'ask',
    },
    {
        id: 2,
        title: 'Show Hacker News',
        endpoint: 'show',
    },
    {
        id: 3,
        title: 'Jobs',
        endpoint: 'job',
    },
    {
        id: 4,
        title: 'Settings',
        endpoint: 'settings',
    },
]

const tabs = endpoints.map((endpoint) => {
    return (
        <Tab
            eventKey={endpoint.endpoint}
            title={endpoint.title}
            key={endpoint.id}
        >
            {endpoint.title}
        </Tab>
    )
})

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    const { darkTheme } = useContext(SettingsContext)

    return (
        <>
        <StyledTabsWrapper $darkTheme={darkTheme}>
            <Tabs
                defaultActiveKey={endpoints[0].endpoint}
                id='navBarTabs'
                className='mb-3'
            >
                {tabs}
            </Tabs>
            </StyledTabsWrapper>
        </>
    )
}

export default Home
