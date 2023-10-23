import { FunctionComponent, useContext } from 'react'
import { Card, Placeholder } from 'react-bootstrap'
import SettingsContext from '../context/settingsContext'

interface ItemLoadingProps {}

const ItemLoading: FunctionComponent<ItemLoadingProps> = () => {
    const { darkTheme } = useContext(SettingsContext)

    return (
        <>
            <Card
                className={`my-2${darkTheme ? ' bg-dark text-secondary' : ''}`}
            >
                <Card.Body>
                    <blockquote className='blockquote mb-0'>
                        <Placeholder as={Card.Text} animation='glow'>
                            <Placeholder xs={8} />
                        </Placeholder>
                        <footer className='blockquote-footer'>
                            <Placeholder as={Card.Text} animation='glow'>
                                By{' '}
                                <cite title='Source Title'>
                                    {' '}
                                    <Placeholder xs={4} />{' '}
                                </cite>
                            </Placeholder>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemLoading
