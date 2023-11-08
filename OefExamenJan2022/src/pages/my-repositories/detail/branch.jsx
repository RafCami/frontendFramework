/**
 *
 * @param name {string} De naam van de branch.
 * @param commits {commits: Array<{
 *          date: number,
 *          message: string,
 *          sha: string,
 *          user: {id: string, lastName: string, firstName: string, email: string, avatar: string},
 *          changedFiles: string[]
 *      }>} De commits die in dit repo gebeurt zijn.
 * @constructor
 */
const Branch = ({name, commits}) => {
    const and = <span>&and;</span>
    const or = <span>&or;</span>

    return (
        <>
            <h2>{name} <span>{and}{or}</span></h2>
        </>
    )
}

export default Branch
