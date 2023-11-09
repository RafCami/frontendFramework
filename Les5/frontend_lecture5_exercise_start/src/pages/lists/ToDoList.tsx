import { FunctionComponent } from 'react'
import { useGetLists } from '../../api/todo'
import { useGetProfile } from '../../api/users'
import { ListGroup, Tab, Tabs } from 'react-bootstrap'
import ToDoListItem from './ToDoListItem'

interface ToDoListProps {
    
}

const ToDoList: FunctionComponent<ToDoListProps> = () => {
    const {data: lists} = useGetLists()
    const {data: user} = useGetProfile()

    const myLists = lists?.filter((list) => list.ownerId === user?.id)
    const sharedWithMe = lists?.filter((list) => list.isPrivate && list.ownerId !== user?.id)
    const publicLists = lists?.filter((list) => !list.isPrivate)

    return (
        <div>
            <Tabs justify defaultActiveKey="user" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="user" title="My lists">
                    <ListGroup>
                        <ToDoListItem lists={myLists ?? []}/>
                    </ListGroup>
                </Tab>
                <Tab eventKey="shared" title="Shared with me">
                    <ListGroup>
                        <ToDoListItem lists={sharedWithMe ?? []}/>
                    </ListGroup>
                </Tab>
                <Tab eventKey="public" title="Public lists">
                    <ListGroup>
                        <ToDoListItem lists={publicLists ?? []}/>
                    </ListGroup>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ToDoList