import { QueryKey, UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {IMovie} from '../models/IMovie.ts'
import {
    persistToDatabase,
    retrieveFromDatabase,
} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.ts'
import {getRandomUnusedMovie, MOVIE_KEY} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/generateData.ts'
import {faker} from '@faker-js/faker'


//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetAllMoviesForCinema = (cinemaId: string | null, enabled = true): UseQueryResult<IMovie[], Error> => { 
    return useQuery({
        queryKey: ['movies', cinemaId],
        queryFn: () => getAllMoviesForCinema(cinemaId),
        enabled,
     })
}

// export const useCreateMovie = (): UseMutationResult<IMovie, Error, void, void> => {
//     const queryClient = useQueryClient()

//     return useMutation({
//         mutationFn: createMovie,
//         onSettled: async () => {
//             await queryClient.invalidateQueries(['movies'])
//         },
//     })
// }
interface OptimisticContext<T> {
    oldData: T | object
    queryKey: QueryKey
}
export const useCreateMovie = (): UseMutationResult<IMovie, Error, void, OptimisticContext<IMovie>> => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createMovie,
        onMutate: async () => {
            const queryKey = ['movies']
            await queryClient.cancelQueries({queryKey})
            const oldData = queryClient.getQueryData<IMovie>(queryKey) ?? {}
            queryClient.setQueryData<IMovie>(queryKey, old => old)
            return {oldData, queryKey}
        },
        onSettled: async (newMovie) => {
            if (newMovie) {
                queryClient.setQueryData<IMovie>(
                    ['movies', newMovie.id],
                    old => old ? newMovie : newMovie,
                )
            }
        },
    })
}

export const useGetMovieById = (id: string, enabled = true): UseQueryResult<IMovie, Error> => { 
    return useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieById(id),
        enabled,
     })
}


export const useAddActorToMovie = (movieId: string, name:string): UseMutationResult<IMovie, Error, AddActorToMovieProps, { oldMovie: IMovie | undefined, queryKey: string[] }> => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: addActorToMovie,
        onMutate: async ({movieId, name}) => {
            const queryKey = ['movie', movieId]
            await queryClient.cancelQueries(queryKey)
            const oldMovie: IMovie | undefined = queryClient.getQueryData(queryKey) ?? undefined
            const newMovie = addActorToMovie({movieId, name})
            queryClient.setQueryData(queryKey, newMovie)
            return {oldMovie, queryKey}
        },
        onSettled: async (data, error, variables, {queryKey}) => {
            await queryClient.invalidateQueries(queryKey)
        },
    })
}
//endregion


//region API functions


/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

/**
 * Retrieve all movies that are currently stored in the database.
 *
 * @param cinemaId The id of the cinema for which the movies must be retrieved,
 */
async function getAllMoviesForCinema(cinemaId: string | null): Promise<IMovie[]> {
    const movies = await retrieveFromDatabase<IMovie[]>(MOVIE_KEY)
    if (cinemaId) {
        movies.forEach(m => m.schedule = m.schedule.filter(s => s.cinemaId === cinemaId))
        return movies.filter(m => m.schedule.length > 0)
    }
    return movies
}

/**
 * Retrieve a specific movie using its IMDB id.
 *
 * @param id The IMDB id of the movie.
 */
async function getMovieById(id: string): Promise<IMovie | undefined> {
    return (await retrieveFromDatabase<IMovie[]>(MOVIE_KEY)).find(m => m.id === id)
}

/**
 * Add a new random movie to the database.
 *
 * @return The newly created movie.
 */
async function createMovie(): Promise<IMovie> {
    const movies = await retrieveFromDatabase<IMovie[]>(MOVIE_KEY)
    const newMovie = getRandomUnusedMovie()
    await persistToDatabase(MOVIE_KEY, [newMovie, ...movies])
    return newMovie
}

interface AddActorToMovieProps {
    movieId: string
    name: string
}

async function addActorToMovie({movieId, name}: AddActorToMovieProps): Promise<IMovie> {
    const movies = await retrieveFromDatabase<IMovie[]>(MOVIE_KEY)
    const movie = movies.find(m => m.id === movieId)
    movie?.actors.push({
        id: faker.string.uuid(),
        name,
    })

    if (!movie) {
        throw new Error(`The movie doesn't exist.`)
    }

    await persistToDatabase(MOVIE_KEY, movies)
    return movie
}

//endregion
