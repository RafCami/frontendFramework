/**
 *
 * @param branchId {string} Het ID van de branch waarin de nieuwe commit moet komen.
 * @return {JSX.Element}
 * @constructor
 */
const NewCommitForm = ({branchId}) => {

    const formSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <div>
            <h3>New repo</h3>

            <form onSubmit={formSubmit}>
                <label>Commit message</label>
                <input type="text"/>

                <label>Filename(s)</label>
                <input type="text"/>

                <button type={'submit'}>Create commit</button>
            </form>
        </div>
    )
}

export default NewCommitForm
