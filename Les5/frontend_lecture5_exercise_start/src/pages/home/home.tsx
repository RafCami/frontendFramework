import { FormEventHandler, FunctionComponent, Suspense, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import FormSubmitButtonWithLoading from '../../utils/formSubmitButtonWithLoading'
import { useCreateList } from '../../api/todo'
import LoadingPart from '../../utils/loadingPart'
import UserList from './UserList'
import { Navigate } from 'react-router-dom'

const Home: FunctionComponent = () => {
  const [name, setName] = useState<string>('')
  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const { mutate: createList, isLoading, data: newList } = useCreateList()
  const [sharedUsers, setSharedUsers] = useState<Set<string>>(new Set())

  if (newList?.id) {
    return <Navigate to={`list/${newList?.id.toString()}`} />
  }

  const toggleUser = (userId: string) => {
    setSharedUsers((prev) => {
        const newUsers = new Set<string>(prev)
        if (newUsers.has(userId)) {
            newUsers.delete(userId)
        } else {
            newUsers.add(userId)
        }
        return newUsers
    })
  }

  const submitHandler: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault()
    createList({ name, isPrivate, sharedUsers : Array.from(sharedUsers) })
    setName('')
    setIsPrivate(false)
    setSharedUsers(new Set())
  }

  const listForm = (
    <Form onSubmit={submitHandler}>
      <Form.Group className='mb-3'>
        <Form.Label>To-Do List name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Name'
          value={name}
          onChange={(evt) => setName(evt.currentTarget.value)}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Check
          type='checkbox'
          label='Is Private'
          checked={isPrivate}
          onChange={() => setIsPrivate(!isPrivate)}
        />
      </Form.Group>

      <FormSubmitButtonWithLoading
        loading={isLoading}
        text={'Create To-Do list'}
        loadingText={'Creating To-Do list...'}
      />
    </Form>
  )

  return (
    <>
      <h1>New To-Do list</h1>

      <Row>
        <Col>{listForm}</Col>

        {isPrivate && (
          <Col>
            <Suspense fallback={<LoadingPart/>}>
              <UserList sharedUsers={sharedUsers} toggleUser={toggleUser}/>
            </Suspense>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Home
