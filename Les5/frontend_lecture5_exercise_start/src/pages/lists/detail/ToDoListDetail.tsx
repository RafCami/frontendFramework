import { FunctionComponent, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useGetList } from '../../../api/todo'
import LoadingPage from '../../../utils/loadingPage'
import { Col, ListGroup, Row } from 'react-bootstrap'

const ToDoListDetailContent: FunctionComponent = () => {
    const {id} = useParams()
    const {data: toDoList} = useGetList({id: Number(id)})
    // const {data: tasks} = useGetTasksForList(Number(id))

    return (
        <div className="mb-5">
            <Row>
                <Col>
                    <h1>{toDoList?.name}</h1>
                    <div className={'text-muted'}>
                        Created by {toDoList?.owner?.username}
                    </div>
                    <hr/>
                </Col>
            </Row>

            <Row className={'mb-2 mt-3'}>
                {/* <CreateTaskForm/> */}
            </Row>

            <Row>
                <Col>
                    {/* <ListGroup>
                        {tasks?.map(t => <TaskItem key={t.id} {...t} />)}
                    </ListGroup> */}
                </Col>
            </Row>
        </div>
    )
}

const ToDoListDetail: FunctionComponent = () => {

    return (
        <Suspense fallback={<LoadingPage/>}>
            <ToDoListDetailContent/>
        </Suspense>
    )
}

export default ToDoListDetail