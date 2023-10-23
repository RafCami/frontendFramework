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
                <Form.Group className='mb-3'>
                    <Form.Label>Refetch interval</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder={refetchInterval.toString()}
                        value={refetchInterval}
                        onChange={(e) =>
                            setRefetchInterval(Number(e.currentTarget.value))
                        }
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Check
                        type='switch'
                        id='darkThemeSwitch'
                        label='Use dark theme'
                        checked={darkTheme}
                        onChange={toggleDarkTheme}
                    />
                </Form.Group>
            </Form>
        </>
    )
}

export default Settings
