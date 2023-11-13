import { FunctionComponent, useContext, useState } from 'react'
import { IMovie } from '../../../models/IMovie.ts'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext.tsx'
import { useAddActorToMovie } from '../../../api/movieApi.ts'

const EditMovie: FunctionComponent<IMovie> = ({ id, title, plot, actors }) => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [newActor, setNewActor] = useState<string>('')
    const { mutate: addActor } = useAddActorToMovie(id, newActor)

    if (user === 'user') {
        navigate('/')
    }

    return (
        <>
            <div className='prev-button'>
                <button onClick={() => navigate(-1)}>
                    <h1>&lt;---</h1>
                </button>
                <h1>{title}</h1>
            </div>

            <p>{plot}</p>

            <h3>Actors</h3>

            <div className='actor-input'>
                <input
                    placeholder='Name'
                    value={newActor}
                    onChange={(evt) => setNewActor(evt.currentTarget.value)}
                />
                <button onClick={() => addActor}>Add actor</button>
            </div>

            <ul>
                {actors.map((a) => (
                    <li key={a.id}>{a.name}</li>
                ))}
            </ul>
        </>
    )
}

export default EditMovie
