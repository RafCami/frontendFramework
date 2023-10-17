import {FunctionComponent, Suspense} from 'react'
import {Form} from 'react-bootstrap'
import useIsEditing from '../../hooks/useIsEditing'
import Loading from '../../utils/loading'
import Weather from './weather'

const Home: FunctionComponent = () => {
    const [selectedCity, setSelectedCity, isEditing] = useIsEditing({defaultValue: 'Lier Belgium'})

    return (
        <>
            <h2>Weerbericht</h2>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Toon weer voor:</Form.Label>
                    <Form.Control type="text"
                                  value={selectedCity}
                                  onChange={setSelectedCity}/>
                </Form.Group>
            </Form>

            <Suspense fallback={<Loading spinnerText={'Weerbericht aan het laden'}/>}>
                {selectedCity !== '' &&
                    <Weather city={selectedCity} allowFetch={!isEditing}/>}
            </Suspense>
        </>
    )
}


export default Home