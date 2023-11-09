import { FunctionComponent } from 'react'
import { Form, ListGroup, ListGroupItem } from 'react-bootstrap'
import useIsEditing from '../../hooks/useIsEditing'
import { useGetProfiles } from '../../api/users'
import ScrollWrapper from '../../utils/scrollWrapper'

interface UserListProps {
  sharedUsers: Set<string>
  toggleUser: (userId: string) => void
}

const UserList: FunctionComponent<UserListProps> = ({ sharedUsers, toggleUser }) => {
  const [username, setUsername, isEditing] = useIsEditing({})
  const { data: users } = useGetProfiles(username, !isEditing)

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Share with users</Form.Label>
          <Form.Control
            type='text'
            placeholder='username'
            value={username}
            onChange={(evt) => setUsername(evt.currentTarget.value)}
          />
          <Form.Text className='text-muted'>Click a user to select them.</Form.Text>
        </Form.Group>
      </Form>

      <ScrollWrapper height={35}>
        <ListGroup>
          {users?.map((user) => (
            <ListGroupItem
              key={user.id}
              action
              active={sharedUsers.has(user.id)}
              onClick={() => toggleUser(user.id)}
            >
              {user.username}
            </ListGroupItem>
          ))}
        </ListGroup>
      </ScrollWrapper>
    </>
  )
}

export default UserList
