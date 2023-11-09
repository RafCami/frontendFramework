import {FunctionComponent} from 'react'
import ITask from '../../../models/ITask.ts'
import {useGetProfile} from '../../../api/users.ts'
import {useDeleteTasks, useUpdateTask} from '../../../api/todo.ts'
import {Button, ListGroupItem} from 'react-bootstrap'
import useCountdown from '../../../hooks/useCountdown.ts'

const TaskItem: FunctionComponent<ITask> = ({id, complete, name, createdBy, completedBy, toDoListId, deadline}) => {
    const {data: profile} = useGetProfile()
    const {mutate: deleteTask} = useDeleteTasks()
    const {mutate: updateTask} = useUpdateTask()
    const timeRemaining = useCountdown(deadline)

    const createdByUsername = typeof(createdBy) !== 'string' ? createdBy?.username : 'Unknown'
    const createdById = typeof(createdBy) !== 'string' ? createdBy?.id : createdBy
    const completedByUsername = typeof(completedBy) !== 'string' ? completedBy?.username : 'Unknown'

    const updateTaskHandler = () => {
        const updatedTask: ITask = {
            id,
            complete: !complete,
            name,
            createdBy,
            completedBy: !complete ? profile : null,
            toDoListId,
            deadline,
        }
        updateTask({updatedTask})
    }

    const deleteBtn = (
        <div className={'d-grid mt-2'}>
            <Button variant="danger" onClick={() => deleteTask({id, toDoListId})}>
                Delete task
            </Button>
        </div>
    )

    return (
        <ListGroupItem className={'d-flex flex-column'}>
            <div className={'d-flex flex-row'}>
                <div className="ms-2 me-auto">
                    <div className="fw-bold fs-3" style={{height: '1em'}}>
                        <div>{name}</div>
                    </div>
                    <div className={'text-muted mt-3'}>
                        <div style={{height: '1em'}}>
                            {!complete && `Time remaining: ${timeRemaining}`}
                        </div>
                        Created by {createdByUsername}
                    </div>
                </div>
                <div className={'flex-grow-1'}/>
                <div className="ms-2 me-auto d-flex flex-column align-items-end">
                    <Button variant='link' className="fw-bold fs-3 text-decoration-none" style={{height: '2em'}}
                            onClick={updateTaskHandler}>
                        {complete ? <span>&#x1F5F9;</span> : <span>&#x2610;</span>}
                    </Button>
                    <div className={'text-muted'}>
                        {complete ? <span>Completed by {completedByUsername}</span> : <></>}
                        <div/>
                    </div>
                </div>
            </div>
            <div>
                {profile?.id === createdById && deleteBtn}
            </div>
        </ListGroupItem>
    )
}

export default TaskItem
