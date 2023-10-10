import Card from 'react-bootstrap/Card'
import {getStudentById} from '../../api/studentApi.ts'
import {FunctionComponent} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Student: FunctionComponent = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const student = getStudentById(Number(id))

    if (!student) {
        return <div>Student could not be found</div>
    }

    return (
        <Card>
            <Card.Header>{student?.name}</Card.Header>
            <Card.Body>
                <Card.Text>Id: {student?.id}</Card.Text>
                <Card.Text>Grade: {student?.grade}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </Card.Footer>
        </Card>
    )
}

export default Student
