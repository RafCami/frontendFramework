import { FunctionComponent, useContext } from 'react'
import { Card } from 'react-bootstrap'
import { useGetItem } from '../api/hackernewsAPI'
import { Link } from 'react-router-dom'
import SettingsContext from '../context/settingsContext'

interface ItemProps {
    id: number
}

const Item: FunctionComponent<ItemProps> = ({ id }) => {
    const { data: item } = useGetItem(id)
    const { darkTheme } = useContext(SettingsContext)

    return (
        <>
            <Card
                className={`my-2${darkTheme ? ' bg-dark text-secondary' : ''}`}
            >
                <Card.Body>
                    <blockquote className='blockquote mb-0'>
                        <p>
                            {item?.url ? (
                                <a href={item?.url}>{item?.title}</a>
                            ) : (
                                item?.title
                            )}
                        </p>
                        <footer className='blockquote-footer'>
                            By <cite title='Source Title'>{item?.by}</cite> |{' '}
                            <Link to={id.toString()}>Discuss</Link>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item
