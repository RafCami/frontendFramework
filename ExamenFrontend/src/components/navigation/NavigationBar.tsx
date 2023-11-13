import {FunctionComponent, useContext} from 'react'
// import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

interface NavigationBarProps {
    
}

// const NavUL = styled.ul`
//   list-style: none;
// `

// const NavLi = styled.li`
//   display: inline-block;
//   margin: 1em;
// `

const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
    const {user, setUser} = useContext(UserContext)

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <NavLink to={'/'} >Home</NavLink>
                </li>
                <li>
                    <select onChange={(evt) => setUser(evt.currentTarget.value)} value={user}>
                        <option value={'admin'} onClick={() => setUser('admin')}>Admin view</option>
                        <option value={'user'} onClick={() => setUser('user')}>Show me what a user sees</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

export default NavigationBar