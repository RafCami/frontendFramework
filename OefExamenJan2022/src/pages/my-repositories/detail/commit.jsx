import LoadingPart from '../../../utils/loadingPart.jsx'

/**
 *
 * @param sha {string} De unieke hash van deze commit.
 * @param user {{id: string, lastName: string, firstName: string, email: string, avatar: string}} De gebruiker die de
 * commit gemaakt heeft.
 * @param date {number} De datum waarop de commit gemaakt is.
 * @param message {string} De commit boodschap.
 * @constructor
 */
const Commit = ({sha, user, date, message}) => {

    const info = (
        <>
            <div>commit: {sha}</div>
            <div>Author: {user?.firstName} {user?.lastName} &lt;{user?.email}&gt;</div>
            <div>Date: {new Date(date).toLocaleString()}</div>
            <button>Show details</button>
        </>
    )

    return (
        <div className="commit">
            <h3>{message}</h3>
            {sha ? info : <LoadingPart/>}
        </div>
    )
}

export default Commit
