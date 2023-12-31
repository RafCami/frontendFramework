import {
    persistToDatabase,
    retrieveFromDatabase
} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.js'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetAllQuestionsForSurvey = ({id}) => {
    return useQuery(
        ['survey', id],
        () => getAllQuestionsForSurvey({surveyId: id})
    )
}

export const useDeleteQuestion = (surveyId)  => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteQuestion,
        onMutate: ({questionId}) => {
            queryClient.setQueryData(['survey', surveyId], o => o.filter(x => x.id !== questionId))
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(['survey', surveyId])
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
 * Haal alle vragen op voor een bepaalde survey.
 *
 * @param surveyId {string} Het id van de survey waarvoor de vragen opgehaald moeten worden
 * @return {Promise<Array<{
 *      id: string,
 *      surveyId: string,
 *      title: string,
 *      type: 'single-line-answer' | 'multi-line-answer' | 'multiple-select',
 *      options: Array<{
 *          name: string,
 *          id: string,
 *      }> | null
 * }>>}
 */
export const getAllQuestionsForSurvey = async ({surveyId}) => {
    const allQuestions = await retrieveFromDatabase('_questions')
    return allQuestions.filter(q => q.surveyId === surveyId)
}

/**
 * Verwijder de vraag met het opgegeven ID.
 *
 * @param questionId {string} Het id van de vraag die verwijderd moet worden.
 * @return {Promise<void>}
 */
export const deleteQuestion = async ({questionId}) => {
    const allQuestions = await retrieveFromDatabase('_questions')
    if (!allQuestions) return
    await persistToDatabase('_questions', allQuestions.filter(q => q.id !== questionId))
}

//endregion



