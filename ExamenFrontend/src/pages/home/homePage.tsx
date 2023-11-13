import { FunctionComponent, Suspense, useContext, useEffect, useState } from 'react'
import { useGetAllCinemas } from '../../api/cinemaApi'
import CinemaSelector from './cinemaSelector'
import { UserContext } from '../../context/UserContext'
import { ICinema } from '../../models/ICinema'
import { useCreateMovie, useGetAllMoviesForCinema } from '../../api/movieApi'
import Movie from './movie'
import LoadingPart from '../../utils/loadingPart'
import { IMovie } from '../../models/IMovie'

const HomePage: FunctionComponent = () => {
    const { data: cinemas } = useGetAllCinemas()
    const { user } = useContext(UserContext)
    const [selectedCinema, setSelectedCinema] = useState<ICinema>({
        id: 'All',
        location: 'All',
    })
    const { data: films } = useGetAllMoviesForCinema(
        selectedCinema.id === 'All' ? null : selectedCinema.id
    )
    const {
        mutate: createMovie,
        isSuccess,
        isLoading,
        isIdle,
        data: newMovie,
    } = useCreateMovie()
    const [allMovies, setAllMovies] = useState<IMovie[]>([])

    useEffect(() => {
        user !== 'user'
            ? setSelectedCinema({ id: 'All', location: 'All' })
            : setSelectedCinema(cinemas[0])
    }, [user])

    const newMovieHandler = () => {
        createMovie()
        if (newMovie) setAllMovies([...allMovies, newMovie])
    }

    return (
        <>
            <div className='cinema-selector'>
                {user !== 'user' && (
                    <CinemaSelector
                        location={{ id: 'All', location: 'All' }}
                        selectedCinema={selectedCinema}
                        setSelectedCinema={setSelectedCinema}
                    />
                )}
                {cinemas?.map((cinema) => (
                    <CinemaSelector
                        key={cinema.id}
                        location={cinema}
                        selectedCinema={selectedCinema}
                        setSelectedCinema={setSelectedCinema}
                    />
                ))}
                {/* PLAATS DE LIJST VAN CINEMA'S HIER */}
            </div>
            {user === 'admin' && (
                <button disabled={isLoading} onClick={() => newMovieHandler}>
                    + Add movie
                </button>
            )}

            {/* TOON DE LIJST VAN FILMS HIERONDER */}
            <Suspense fallback={<LoadingPart />}>
                {films?.map((film) => (
                    <Movie key={film.id} {...film} />
                ))}
            </Suspense>
        </>
    )
}

export default HomePage
