import { useState } from "react"
import Repository from "./repository"
import NewRepoModal from "./newRepoModal"
import { useGetRepositories } from "../../api/repositoriesAPI"

const RepositoryList = ({projectId}) => {
    const {data: repositories} = useGetRepositories(projectId)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>New repository</button>
            {repositories?.map((repository) => (
                <Repository key={repository.id ?? 'temp'} {...repository} />
            ))}
            <NewRepoModal projectId={projectId} show={showModal} closeHandler={() => setShowModal(false)} />
        </>
    )
}

export default RepositoryList