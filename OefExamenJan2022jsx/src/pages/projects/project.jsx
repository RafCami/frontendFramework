import ProjectContainer from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/projectContainer.jsx'
import {getCurrentUser} from '../../api/userApi.js'
import {useDeleteProject} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/queriesAndMutations.js'

const Project = ({id, name, description, owner, isPrivate}) => {
    const user = getCurrentUser()
    const deleteProjectMutation = useDeleteProject()

    const deleteProject = () => {
        deleteProjectMutation.mutate({projectId: id, owner})
    }

    return (
        <ProjectContainer data-cy="project">
            <h3>{name}</h3>
            <p>{description}</p>

            {<button onClick={deleteProject}>Delete {name}</button>}
        </ProjectContainer>
    )
}

export default Project
