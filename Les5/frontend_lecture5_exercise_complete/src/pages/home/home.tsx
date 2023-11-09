import {FormEventHandler, FunctionComponent, Suspense, useState} from 'react'
import {useCreateList} from '../../api/todo.ts'
import {useNavigate} from 'react-router-dom'
import {Col, Form, Row} from 'react-bootstrap'
import ResponseMessage from '../../utils/responseMessage.tsx'
import FormSubmitButtonWithLoading from '../../utils/formSubmitButtonWithLoading.tsx'
import UserList from './userList.tsx'
import LoadingPart from '../../utils/loadingPart.tsx'

const Home: FunctionComponent = () => {
    const [name, setName] = useState<string>('')
    const [isPrivate, setIsPrivate] = useState<boolean>(false)
    const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set())
    const {mutate: createList, isSuccess, isLoading, isIdle, data: toDoList} = useCreateList()
    const navigate = useNavigate()

    if (toDoList?.id) {
        setTimeout(() => navigate(`lists/${toDoList.id}`), 1500)
    }

    const createListHandler: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault()
        createList({name, isPrivate, sharedUsers: [...selectedUsers.values()]})
        setName('')
        setIsPrivate(false)
        setSelectedUsers(new Set())
    }

    const addRemoveUser = (userId: string) => {
        setSelectedUsers(users => {
            const newUsers = new Set(users)
            newUsers.has(userId) ? newUsers.delete(userId) : newUsers.add(userId)
            return newUsers
        })
    }

    const shareWithList = (
        <Col>
            <Suspense fallback={<LoadingPart/>}>
                <UserList addOrRemoveUser={addRemoveUser} selectedUsers={selectedUsers}/>
            </Suspense>
        </Col>
    )

    return (
        <Form onSubmit={createListHandler}>
            <h1>New To-Do List</h1>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>To-Do list name</Form.Label>
                        <Form.Control type="text" required placeholder="List Name" value={name}
                                      onChange={evt => setName(evt.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Is private"
                                    checked={isPrivate} onChange={evt => setIsPrivate(evt.target.checked)}/>
                    </Form.Group>
                </Col>
                {isPrivate && shareWithList}
            </Row>

            <ResponseMessage success={isSuccess} show={!isIdle && !isLoading}
                             successText="To-Do list successfully created!, you will be redirected automatically."
                             failureText="We couldn't create the To-Do list for you, please try again." />

            <div className="d-grid gap-2">
                <FormSubmitButtonWithLoading loading={isLoading} text="Create To-Do list"
                                             loadingText="Creating To-Do list"/>
            </div>
        </Form>
    )
}

export default Home
