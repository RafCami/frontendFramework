import LoadingPart from '../../utils/loadingPart.jsx'

/**
 * De lay-out voor een repository.
 *
 * @param id {string} Het id van het repository.
 * @param name {string} De naam van het repository.
 * @param description {string} De beschrijving van het repository.
 * @param branches {Array<{
 *  name: string,
 *  id: string,
 *  commits: Array<{
 *      date: number,
 *      message: string,
 *      sha: string,
 *      user: {id: string, lastName: string, firstName: string, email: string, avatar: string}
 *  }>
 * }>} De branches in het repository.
 * @param lastActivity {number} Het moment waarop de laatste activiteit gebeurd is.
 */
const Repository = ({id, name, description, branches, lastActivity}) => {

    const info = (
        <span>
            {branches?.length} branches | {branches?.map(b => b.commits.length).reduce((x, y) => x + y)} total commits |
            last active on {new Date(lastActivity).toLocaleString()}
        </span>
    )

    return (
        <div className="repository">
            <h3>{name}</h3>
            <p>{description}</p>

            {id ? info : <LoadingPart/>}

            {id && <button>Details</button>}
        </div>
    )
}

export default Repository
