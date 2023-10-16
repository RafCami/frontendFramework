import {FunctionComponent} from 'react'
import { getAllRegions } from '../../api/capitalsAPI'
import ListGroup from 'react-bootstrap/ListGroup'
import { NavLink } from 'react-router-dom'

interface ChooseRegionProps {
    
}

const ChooseRegion: FunctionComponent<ChooseRegionProps> = () => {

    const regions = getAllRegions().map(region => {
        return (
            <NavLink to={`../play/${region}`} key={region}>
                <ListGroup.Item action className='list-group-item-action' key={region}>
                    {region}
                </ListGroup.Item>
            </NavLink>
        )
    })

    return (
        <ListGroup>
                {regions}
        </ListGroup>
    )
}

export default ChooseRegion