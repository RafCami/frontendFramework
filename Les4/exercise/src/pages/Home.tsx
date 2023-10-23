import { FunctionComponent, Suspense, useContext } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import StyledTabsWrapper from '../stylecomponents/StyledTabsWrapper'
import SettingsContext from '../context/settingsContext'
import Settings from '../components/Settings'
import TopItems from '../components/TopItems'
import LoadingPage from '../components/loadingPage'
import { HackernewsStoryEndpoints } from '../api/hackernewsAPI'

interface Endpoint {
    id: number
    title: string
    endpoint: HackernewsStoryEndpoints
}

const endpoints: Endpoint[] = [
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
]

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
                    {endpoints.map((e) => (
                        <Tab eventKey={e.endpoint} title={e.title} key={e.id}>
                            <TopItems endpoint={e.endpoint} />
                        </Tab>
                    ))}
                    <Tab eventKey='Settings' title='Settings'>
                        <Settings />
                    </Tab>
                </Tabs>
            </StyledTabsWrapper>
        </>
    )
}

export default Home
