import { FunctionComponent } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useGetItem } from '../api/hackernewsAPI'
import Comment from '../components/Comment'

interface DetailProps {}

const Detail: FunctionComponent<DetailProps> = () => {
    const { id } = useParams()
    const { data: item } = useGetItem(Number(id))
    const navigate = useNavigate()

    if (!item) { return <Navigate to='/' /> }

    return (
        <>
            <h1>
                <span onClick={() => navigate(-1)}>&lt;-- &nbsp;&nbsp;</span>
                {item?.url ? (
                    <a href={item?.url}>{item?.title}</a>
                ) : (
                    item?.title
                )}
            </h1>
                <div dangerouslySetInnerHTML={{__html: item?.text ?? ''}}/>
                {item?.kids?.map((kid) => ( <Comment key={kid} id={kid} /> ))}
        </>
    )
}

export default Detail
