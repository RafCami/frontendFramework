import {persistToDatabase, retrieveFromDatabase} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.js'
import {getAllUsers, getCurrentUser} from './userApi.js'
import {generateProject} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/generateData.js'

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */


//endregion


//region Fetching functions


/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          Fetching functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

/**
 * Haal alle projecten op waar de ingelogde gebruiker toegang tot heeft.
 *
 * @return {Promise<Array<{
 *     id: string,
 *     name: string,
 *     isPrivate: boolean,
 *     description: string,
 *     users: string[],
 *     owner: string
 * }>>}
 */
export const getProjects = async () => {
    const allProjects = await retrieveFromDatabase('_projects', false)
    const user = getCurrentUser()
    return allProjects.filter(p => !p.isPrivate || p.owner === user?.id || p.users.map(u => u.id).includes(user?.id))
}

/**
 * Verwijder het project met het opgegeven ID.
 *
 * @param projectId {string} Het id van het project dat verwijderd moet worden.
 * @param timeout {boolean} Bepaald of er een artificiële timeout toegevoegd moet worden.
 * @return {Promise<void>}
 */
export const deleteProject = async ({projectId}, timeout = true) => {
    const allProjects = await retrieveFromDatabase('_projects', timeout)
    if (!allProjects) return
    await persistToDatabase('_projects', allProjects.filter(p => p.id !== projectId), timeout)
}

/**
 * Maak een nieuw project aan.
 *
 * @param owner {string} Het id van de eigenaar van het nieuwe project.
 * @param isPrivate {boolean} Bepaald of het project al dan niet privé is.
 * @param name {string} De naam van het nieuwe project.
 * @param description {string} De beschrijving van het nieuwe project.
 * @return {Promise<void>}
 */
export const createProject = async ({owner, isPrivate, name, description}) => {
    const users = getAllUsers()
    const project = generateProject(users)
    project.owner = owner
    project.isPrivate = isPrivate
    project.name = name
    project.description = description
    const allProjects = await getProjects()
    allProjects.push(project)
    await persistToDatabase('_projects', allProjects, false)
}

//endregion
