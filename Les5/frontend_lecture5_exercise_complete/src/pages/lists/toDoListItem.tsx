import {FunctionComponent} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDeleteList} from '../../api/todo.ts'
import {Button, Col, ListGroupItem, Row} from 'react-bootstrap'
import IToDoList from '../../models/IToDoList.ts'

const ToDoListItem: FunctionComponent<IToDoList> = ({owner, id, name}) => {
    const navigate = useNavigate()
    const {mutate: deleteList} = useDeleteList()

    return (
        <ListGroupItem>
            <Row className="ms-2 me-auto">
                <Col xs={10} onClick={() => navigate(`${id}`)}>
                    <div className="fw-bold fs-3">
                        {name}
                    </div>
                    <div>
                        <div className={'text-muted'}>
                            Created by {owner?.username}
                        </div>
                    </div>
                </Col>
                <Col xs={2} className="text-end">
                    <Button variant="danger" onClick={() => deleteList({id})}>Delete</Button>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

export default ToDoListItem
