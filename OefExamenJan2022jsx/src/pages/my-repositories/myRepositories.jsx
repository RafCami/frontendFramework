import { Suspense, useState } from "react"
import { useGetProjects } from "../../api/projectsAPI"
import LoadingPart from "../../utils/loadingPart"
import RepositoryList from "./RepositoryList"

const MyRepositories = () => {
    const [tab1, setTab1] = useState(true)
    const {data: projects} = useGetProjects()
    const myProjects = projects.filter((project) => project.isPrivate === true)
    const publicProjects = projects.filter((project) => project.isPrivate === false)
    const selectedProjects = tab1 ? myProjects : publicProjects
    const [selectedProject, setSelectedProject] = useState(selectedProjects[0]?.id)

    const noProject = <h4>No projects found, make sure youre logged in.</h4>

    const setActiveTab = (_setTab1) => {
        setTab1(_setTab1)
        setSelectedProject(_setTab1 ? myProjects[0]?.id : publicProjects[0]?.id)
    }

    return (
        <>
            <div className="tabContainer">
                <div>
                    {/* Zorg dat de active klasse dynamisch aangepast wordt als de gebruiker een ander tab selecteert.*/}
                    <h1 className={tab1 ? "active" : ''} onClick={() => setActiveTab(true)}>My projects</h1>
                </div>
                <div>
                    <h1 className={!tab1 ? "active" : ''} onClick={() => setActiveTab(false)}>Public projects</h1>
                </div>
            </div>

            <div className="projects-repositories">
                <div>
                    <h3>Projects</h3>

                    {/* Plaats de projecten die voldoen aan de criteria (gebruiker, publiek, privé) hier. */}
                    {tab1 && myProjects.length === 0 && noProject}
                    {selectedProjects?.map((project) => (
                        <button key={project.id} className={project.id === selectedProject ? 'active' : ''}
                        onClick={() => setSelectedProject(project.id)} >{project.name}</button>
                    ))}
                </div>
                <div>
                    <h3>Repositories</h3>

                    {/* Plaats de repositories in het geselecteerde project hier. */}
                    <Suspense fallback={<LoadingPart />}>
                        <RepositoryList projectId={selectedProject} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default MyRepositories
