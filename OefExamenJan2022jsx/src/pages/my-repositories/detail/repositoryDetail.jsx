import { useNavigate, useParams } from "react-router-dom"
import { useGetRepository } from "../../../api/repositoriesAPI"
import Branch from "./branch"
import { useState } from "react"
import NewCommitForm from "./newCommitForm"

const RepositoryDetail = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data: repository} = useGetRepository(id)
    const [showAll, setShowAll] = useState(false)
    const [selectedCommit, setSelectedCommit] = useState(undefined)
    const [newCommitBranch, setNewCommitBranch] = useState(undefined)

    const noCommit = <h3>Select a commit</h3>
    

    return (
        <>
            <h1><span onClick={() => navigate(-1)}>&lt;</span> {repository?.name} </h1>

            {/* Beschrijving */}
            <p>{repository.description}</p>

            <div className="branches">
                <div>
                    <h3>Branches</h3>

                    <div>
                        <div>
                            <input type={'checkbox'} checked={showAll} onChange={() => setShowAll(true)}/>
                            <label>Show all commits</label>
                        </div>

                        <div>
                            <input type={'checkbox'} checked={!showAll} onChange={() => setShowAll(false)}/>
                            <label>Only show my commits</label>
                        </div>
                    </div>

                    {repository?.branches?.map((branch) => (
                        <Branch key={branch.id} {...branch} showAll={showAll} setSelectedCommit={setSelectedCommit} addNewCommit={() => setNewCommitBranch(branch.id)} />
                    ))}

                </div>
                <div>
                    {/* Rechter kolom */}
                    {newCommitBranch && (
                        <NewCommitForm branchId={newCommitBranch} />
                        )}
                    {newCommitBranch && (
                        <hr/>
                    )}
                    {!selectedCommit && noCommit}
                    {selectedCommit && (
                        <h4>Files changed in commit</h4>
                    )}
                    {selectedCommit && selectedCommit?.changedFiles?.map((file, index) => (
                        <p key={index}>{file}</p>
                    ))}
                </div>
            </div>

        </>
    )
}

export default RepositoryDetail
