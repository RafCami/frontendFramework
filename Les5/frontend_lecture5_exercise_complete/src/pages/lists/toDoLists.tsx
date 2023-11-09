import {FunctionComponent, Suspense} from 'react'
import LoadingPage from '../../utils/loadingPage.tsx'
import {ListGroup, Tab, Tabs} from 'react-bootstrap'
import {useGetLists} from '../../api/todo.ts'
import {useGetProfile} from '../../api/users.ts'
import ToDoListItem from './toDoListItem.tsx'

const ToDoListContent: FunctionComponent = () => {
    const {data: lists} = useGetLists()
    const {data: profile} = useGetProfile()
    const publicLists = lists?.filter(l => !l.isPrivate) ?? []
    const userLists = lists?.filter(l => l.ownerId === profile?.id) ?? []
    const sharedWithUser = lists?.filter(l => l.isPrivate && l.ownerId !== profile?.id) ?? []

    return (
        <div>
            <Tabs justify defaultActiveKey="user" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="user" title="My lists">
                    {userLists.length === 0 && <h2>No list found</h2>}
                    <ListGroup>
                        {userLists.map(l => <ToDoListItem key={l.id ?? 'temp'} {...l}/>)}
                    </ListGroup>
                </Tab>
                <Tab eventKey="shared" title="Shared with me">
                    {sharedWithUser.length === 0 && <h2>No list found</h2>}
                    <ListGroup>
                        {sharedWithUser.map(l => <ToDoListItem key={l.id ?? 'temp'} {...l}/>)}
                    </ListGroup>
                </Tab>
                <Tab eventKey="public" title="Public lists">
                    {publicLists.length === 0 && <h2>No list found</h2>}
                    <ListGroup>
                        {publicLists.map(l => <ToDoListItem key={l.id ?? 'temp'} {...l}/>)}
                    </ListGroup>
                </Tab>
            </Tabs>
        </div>

    )
}

const ToDoLists: FunctionComponent = () => {
    return (
        <Suspense fallback={<LoadingPage/>}>
            <ToDoListContent/>
        </Suspense>
    )
}

export default ToDoLists
