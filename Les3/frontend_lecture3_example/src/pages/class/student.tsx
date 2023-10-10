import Card from 'react-bootstrap/Card'
import {getStudentById} from '../../api/studentApi.ts'
import {FunctionComponent} from 'react'

const Student: FunctionComponent = () => {
    const student = getStudentById(-1)

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
                <div>Back</div>
            </Card.Footer>
        </Card>
    )
}

export default Student
