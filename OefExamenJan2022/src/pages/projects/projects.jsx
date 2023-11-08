import {Suspense, useState} from 'react'
import SetUp from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/setUp.jsx'
import FlexContainer from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/flexContainer.jsx'
import FormElem from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/formElem.jsx'
import {useCreateProject} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/queriesAndMutations.js'
import ProjectList from './projectList.jsx'
import LoadingPage from '../../utils/loadingPage.jsx'
import {getCurrentUser} from '../../api/userApi.js'

const ProjectsContent = () => {
    const user = getCurrentUser()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [isPrivate, setIsPrivate] = useState(false)
    const createProjectMutation = useCreateProject()

    const createProjectHandler = (evt) => {
        evt.preventDefault()
        createProjectMutation.mutate({owner: user?.id, isPrivate, name, description})
    }

    return (
        <>
            <form onSubmit={createProjectHandler}>
                <h1>Projects</h1>
                <FlexContainer>
                    <FormElem>
                        <label>Name</label>
                        <input type="text" value={name} onChange={evt => setName(evt.target.value)}
                               data-cy={'name'}/>
                    </FormElem>
                    <FormElem>
                        <label>Description</label>
                        <input type="text" value={description} onChange={evt => setDescription(evt.target.value)}
                               data-cy={'description'}/>
                    </FormElem>
                </FlexContainer>
                <FlexContainer>
                    <FormElem>
                        <label>Private</label>
                    </FormElem>
                    <FormElem>
                        <input type="checkbox" checked={isPrivate} onChange={evt => setIsPrivate(evt.target.checked)}
                               data-cy={'private'}/>
                    </FormElem>
                </FlexContainer>
                <FlexContainer>
                    <FormElem>
                        <button data-cy={'submit'}>Create project</button>
                    </FormElem>
                </FlexContainer>
            </form>

            <Suspense fallback={<LoadingPage/>}>
                <ProjectList/>
            </Suspense>
        </>
    )
}

const Projects = () => {
    return (
        <SetUp>
            <ProjectsContent/>
        </SetUp>
    )
}

export default Projects
