import Project from './project.jsx'
import {useGetProjectsTesting} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/queriesAndMutations.js'


const ProjectList = () => {
    const {data: projects} = useGetProjectsTesting()

    return (
        <>
            {projects?.map(p => <Project key={p.id ?? 'temp'} {...p}/>)}
        </>
    )
}

export default ProjectList
