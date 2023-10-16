import {FunctionComponent, useState} from 'react'
import { useParams } from 'react-router-dom'
import AccordionLayout from './AccordionLayout'
import TwoColumnLayout from './TwoColumnLayout'

interface HighscoresProps {
    
}

const Highscores: FunctionComponent<HighscoresProps> = () => {
    const { chosenRegion } = useParams<{ chosenRegion: string }>()
    const [region, setRegion] = useState<string | undefined>(chosenRegion)


    return (
        <>
            {/* {chosenRegion ? (
                <h1>Highscores for {chosenRegion}</h1>
                
            ) : (
                <h1>Highscores</h1>
            )} */}
            <div className='d-md-none'>
                <AccordionLayout region={region} setRegion={setRegion} />
            </div>
            <div className='d-none d-md-block'>
                <TwoColumnLayout region={region} setRegion={setRegion} />
            </div>
        </>
    )
}

export default Highscores