import { useContext, useEffect, useRef, useState } from "react"
import { useCreateNewCommit } from "../../../api/repositoriesAPI"
import { useParams } from "react-router-dom"
import UserContext from "../../../context/UserContext"

/**
 *
 * @param branchId {string} Het ID van de branch waarin de nieuwe commit moet komen.
 * @return {JSX.Element}
 * @constructor
 */
const NewCommitForm = ({branchId}) => {
    const {id: repoId} = useParams()
    const {loggedinUser: user} = useContext(UserContext)
    const [message, setMessage] = useState('')
    const [changedFiles, setFilename] = useState('')
    const messageRef = useRef()
    const {mutate: addNewCommit} = useCreateNewCommit()

    useEffect(() => {
        if (message === '' && changedFiles === '') messageRef?.current?.focus()
    })


    const formSubmit = (evt) => {
        evt.preventDefault()
        addNewCommit({repoId, branchId, message, user, changedFiles})
        setMessage('')
        setFilename('')
    }

    return (
        <div>
            <h3>New repo</h3>

            <form onSubmit={formSubmit}>
                <label>Commit message</label>
                <input type="text" ref={messageRef} value={message} onChange={(evt) => setMessage(evt.currentTarget.value)}/>

                <label>Filename(s)</label>
                <input type="text" value={changedFiles} onChange={(evt) => setFilename(evt.currentTarget.value)}/>

                <button type={'submit'}>Create commit</button>
            </form>
        </div>
    )
}

export default NewCommitForm
