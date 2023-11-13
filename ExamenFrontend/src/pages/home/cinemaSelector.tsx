import {Dispatch, FunctionComponent, SetStateAction} from 'react'
import { ICinema } from '../../models/ICinema'

interface CinemaSelectorProps {
    location: ICinema
    selectedCinema: ICinema
    setSelectedCinema: Dispatch<SetStateAction<ICinema>>
}

const CinemaSelector: FunctionComponent<CinemaSelectorProps> = ({location, selectedCinema, setSelectedCinema}) => {
    return (

        <button className={selectedCinema.location === location.location ? 'selected' : ''} onClick={() => setSelectedCinema(location)}>
            {location.location}
        </button>

    )
}

export default CinemaSelector
