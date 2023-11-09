import {FormEventHandler, FunctionComponent, useEffect, useRef, useState} from 'react'
import {Button, Col, Form, Row} from 'react-bootstrap'
import {useCreateTask} from '../../../api/todo.ts'
import {useParams} from 'react-router-dom'

interface CreateTaskFormProps {

}

const CreateTaskForm: FunctionComponent<CreateTaskFormProps> = () => {
    const {id} = useParams()
    const {mutate: createTask} = useCreateTask()
    const [newTaskName, setNewTaskName] = useState<string>('')
    const [newTaskDeadline, setNewTaskDeadline] = useState<string>('')
    const nameInputRef = useRef<HTMLInputElement>(null)

    const createTaskHandler: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault()
        evt.currentTarget.blur()
        createTask({name: newTaskName, toDoListId: Number(id), deadline: new Date(newTaskDeadline)})
        setNewTaskName('')
        setNewTaskDeadline('')
    }

    useEffect(() => {
        if (newTaskName === '' && newTaskDeadline === '') {
            nameInputRef.current?.focus()
        }
    }, [newTaskName, newTaskDeadline])

    return (
        <Form onSubmit={createTaskHandler}>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" value={newTaskName} placeholder="Name"
                                      ref={nameInputRef} required
                                      onChange={evt => setNewTaskName(evt.target.value)}/>
                    </Form.Group>

                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3" >
                        <Form.Control type="datetime-local" value={newTaskDeadline}
                                      placeholder="Deadline" required
                                      onChange={evt => setNewTaskDeadline(evt.target.value)}/>
                    </Form.Group>
                </Col>
                <Col sm={12}>
                    <div className={'d-grid'}>
                        <Button variant="primary" type="submit">
                            Create task
                        </Button>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

export default CreateTaskForm
