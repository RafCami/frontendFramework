import {
    persistToDatabase,
    retrieveFromDatabase
} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.js'
import {faker} from '@faker-js/faker'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {generateQuestion} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/generateData.js'

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetAllSurveys = () => {
    return useQuery(
        ['surveys'],
        getAllSurveys
    )
}


export const useCreateSurvey = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createSurvey,
        onSuccess: (data) => {
            queryClient.setQueryData(['surveys'], x => [data, ...x])
        },
        onSettled: async () => {
            await queryClient.invalidateQueries(['surveys'])
        }
    })
}

//endregion


//region Fetching functions


/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          Fetching functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

/**
 * Haal alle surveys op die in de database zitten.
 *
 * @return {Promise<Array<{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }>>}
 */
const getAllSurveys = async () => {
    const surveys = await retrieveFromDatabase('_surveys')
    return surveys.sort((a, b) => b.createdAt - a.createdAt)
}

/**
 * Maak een nieuwe survey aan.
 *
 * @param name {string} De naam van de survey.
 * @return {Promise<{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }>}
 */
const createSurvey = async ({name}) => {
    const survey = {
        name,
        id: faker.string.uuid(),
        createdAt: Date.now(),
    }
    const questions = Array(faker.number.int({min: 2, max: 8})).fill(null).map(() => generateQuestion(survey.id))

    const surveys = await retrieveFromDatabase('_surveys')
    await persistToDatabase('_surveys', [...surveys, survey])

    const oldQuestions = await retrieveFromDatabase('_questions', false)
    await persistToDatabase('_questions', [...oldQuestions, ...questions])

    return survey
}

//endregion
