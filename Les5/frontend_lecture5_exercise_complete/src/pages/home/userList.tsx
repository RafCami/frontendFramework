import {FunctionComponent, MouseEvent} from 'react'
import {Form, ListGroup} from 'react-bootstrap'
import ScrollWrapper from '../../utils/scrollWrapper.tsx'
import {useGetProfiles} from '../../api/users.ts'
import useIsEditing from '../../hooks/useIsEditing.ts'

interface UserListProps {
    addOrRemoveUser: (userId: string) => void
    selectedUsers: Set<string>
}

const UserList: FunctionComponent<UserListProps> = ({selectedUsers, addOrRemoveUser}) => {
    const [username, setUsername, isEditing] = useIsEditing({defaultValue: ''})
    const {data: users} = useGetProfiles({username, enabled: !isEditing})

    const userItemClicked = (evt: MouseEvent, userId: string) => {
        evt.preventDefault()
        addOrRemoveUser(userId)
    }

    const userItem = ({id, username}: { id: string, username: string }) => (
        <ListGroup.Item action key={id} active={selectedUsers.has(id)}
                        onClick={evt => userItemClicked(evt, id)}>
            {username}
        </ListGroup.Item>
    )

    return (
        <Form.Group className="mb-3">
            <Form.Label>Share with users</Form.Label>
            <Form.Control type="text" placeholder="Filter users" value={username}
                          onChange={evt => setUsername(evt.target.value)}/>
            <Form.Text className="text-muted">
                Click a user to select them.
            </Form.Text>

            <ScrollWrapper height={30}>
                <ListGroup variant="flush">
                    {users?.map(userItem)}
                </ListGroup>
            </ScrollWrapper>
        </Form.Group>
    )
}

export default UserList
