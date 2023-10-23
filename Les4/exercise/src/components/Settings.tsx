import { FunctionComponent, useContext } from 'react'
import SettingsContext from '../context/settingsContext'
import { Form } from 'react-bootstrap'

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
    const { darkTheme, refetchInterval, toggleDarkTheme, setRefetchInterval } =
        useContext(SettingsContext)

    return (
        <>
            <Form>
                <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                >
                    <Form.Label>Refetch interval</Form.Label>
                    <Form.Control type='number' placeholder={refetchInterval.toString()} />
                </Form.Group>
            </Form>
        </>
    )
}

export default Settings
