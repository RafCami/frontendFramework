import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {createProject, deleteProject, getProjects} from '../../../api/projectsAPI.js'
import {getCurrentUser} from '../../../api/userApi.js'

export const useCreateProject = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createProject,
        onMutate: async ({owner, isPrivate, name, description}) => {
            await queryClient.invalidateQueries(['projectsTesting', owner])
            const oldProjects = queryClient.getQueryData(['projectsTesting', owner])
            queryClient.setQueryData(['projectsTesting', owner], old => [...old, {owner, isPrivate, name, description}])
            return oldProjects
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['projectsTesting'])
        }
    })
}

export const useDeleteProject = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({projectId, owner}) => deleteProject({projectId}, false),
        onMutate: async ({projectId, owner}) => {
            await queryClient.invalidateQueries(['projectsTesting', owner])
            const oldProjects = queryClient.getQueryData(['projectsTesting', owner])
            queryClient.setQueryData(['projectsTesting', owner], old => old.filter(p => p.id !== projectId))
            return oldProjects
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['projectsTesting'])
        }
    })
}

export const useGetProjectsTesting = () => {
    const user = getCurrentUser()
    return useQuery(['projectsTesting', user?.id], getProjects, {})
}
