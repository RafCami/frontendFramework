import {FunctionComponent, PropsWithChildren} from 'react'
import {Alert} from 'react-bootstrap'

const ErrorMessage: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <Alert variant="danger">
            {children}
        </Alert>
    )
}

export default ErrorMessage
