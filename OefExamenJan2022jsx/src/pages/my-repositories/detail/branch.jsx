import { useContext, useState } from "react"
import Commit from "./commit"
import UserContext from "../../../context/UserContext"

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
const Branch = ({name, commits, showAll, setSelectedCommit, addNewCommit}) => {
    const {loggedinUser} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const and = <span>&and;</span>
    const or = <span>&or;</span>

    return (
        <>
            <h2>{name} <span onClick={() => setIsOpen(!isOpen)}>{isOpen ? or : and}</span></h2>
            <button onClick={addNewCommit}>Create a new commit in this branch</button>
            {isOpen && commits?.filter(c => showAll || (loggedinUser.id === c?.user?.id)).map((commit) => (
                <Commit key={commit.sha ?? 'temp'} {...commit} setSelectedCommit={() => setSelectedCommit(commit)} />
            ))}
        </>
    )
}

export default Branch
