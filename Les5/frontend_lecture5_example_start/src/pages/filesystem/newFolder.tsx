import {FunctionComponent, useState} from 'react'
import FileSystemCard from './styledComponents/fileSystemCard.tsx'
import {Button, Card, Modal, Form} from 'react-bootstrap'
import FileSystemIcon from './styledComponents/fileSystemIcon.tsx'
import FileSystemName from './styledComponents/fileSystemName.tsx'
import {faFolderPlus} from '@fortawesome/free-solid-svg-icons'
import ErrorMessage from '../../utils/errorMessage.tsx'

interface NewFolderProps {
    currentDirId: number | null
}

const NewFolder: FunctionComponent<NewFolderProps> = ({currentDirId}) => {
    const [showNewFolderModal, setShowNewFolderModal] = useState<boolean>(false)
    const [name, setName] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(true)

    // DELETE DEZE LIJN ALS DE MUTATIE TOEGEVOEGD IS.
    const isError = false

    const closeHandler = () => {
        setName('')
        setShowNewFolderModal(false)
    }

    const createFolder = () => {
        setShowErrorMessage(true)
        closeHandler()
    }

    return (
        <>
            <FileSystemCard onClick={() => setShowNewFolderModal(true)}>
                <Card.Title>
                    <FileSystemIcon icon={faFolderPlus}/>
                    <FileSystemName>New Folder</FileSystemName>
                </Card.Title>
            </FileSystemCard>

            <Modal show={showNewFolderModal} centered onHide={closeHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>New folder</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Please enter a title for the folder</p>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="The title of the new folder"
                                      value={name}
                                      onChange={(evt) => setName(evt.target.value)}/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeHandler}>Cancel</Button>
                    <Button variant="primary" onClick={createFolder} disabled={name === ''}>Create folder</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={isError && showErrorMessage} centered onHide={() => setShowErrorMessage(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ErrorMessage>
                        <p>Couldn't create a new directory, please ensure you are logged in and try again.</p>
                    </ErrorMessage>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowErrorMessage(false)}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NewFolder
