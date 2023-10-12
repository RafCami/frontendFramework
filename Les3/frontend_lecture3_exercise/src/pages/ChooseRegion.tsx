import {FunctionComponent} from 'react'
import { getAllRegions } from '../api/capitalsAPI'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Link } from 'react-router-dom'

interface ChooseRegionProps {
    
}

const ChooseRegion: FunctionComponent<ChooseRegionProps> = () => {

    const regions = getAllRegions().map(region => {
        return (
            <ListGroupItem key={region}>
            <Link to={`play/${region}`}>
                {region}
            </Link>

            </ListGroupItem>
        )
    })

    return (
        <ListGroup>
                {regions}
        </ListGroup>
    )
}

export default ChooseRegion