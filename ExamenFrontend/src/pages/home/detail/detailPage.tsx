import {FunctionComponent} from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieById } from '../../../api/movieApi'
import EditMovie from './editMovie'

const DetailPage: FunctionComponent = () => {
    const {id} = useParams()
    const {data: movie} = useGetMovieById(id ?? '')

    return (
        <>
        {movie && (
            <EditMovie {...movie} />
        )}
        </>
    )
}

export default DetailPage
