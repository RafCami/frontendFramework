import { FunctionComponent } from 'react'
import IToDoList from '../../models/IToDoList'
import { ListGroup } from 'react-bootstrap'
import List from './List'

interface ToDoListItemProps {
    lists: IToDoList[]
}

const ToDoListItem: FunctionComponent<ToDoListItemProps> = ({ lists }) => {

    if (lists.length === 0) {
        return <h2>No list found</h2>
    }


    return (
        <ListGroup>
            {lists?.map((list) => (
                <List key={list.id} {...list} />
            ))}
        </ListGroup>
    )
}

export default ToDoListItem