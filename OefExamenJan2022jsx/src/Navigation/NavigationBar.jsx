import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import { getAllUsers } from '../api/userApi'
import User from '../utils/user'

const NavigationContainer = styled.ul`
    list-style: none;
    background-color: #1d2025;
    margin: 0;
    display: flex;
`

const Navigationitem = styled.li`
    list-style: none;
    display: inline-block;
    padding: 1em;
    font-size: larger;
    color: white;

    a:hover {
        color: #2a76dd;
    }

    a {
    color: white;
        text-decoration: none;
    }
`

const NavigationBar = () => {
    const {loggedinUser, setLoggedinUser} = useContext(UserContext)
    const [showMenu, setShowMenu] = useState(false)
    const users = getAllUsers()

    const noUser = loggedinUser ?  <span onMouseEnter={() => setShowMenu(true)}>{loggedinUser.firstName} {loggedinUser.lastName} &or;</span> : <span onMouseEnter={() => setShowMenu(true)}>Kies een gebruiker &or;</span>

    const userMenu = (
        <div className='userMenu' onMouseLeave={() => setShowMenu(false)}>
            <button onClick={() => setLoggedinUser(undefined)}>Log uit</button>
            {users.map((user) => (
                <User key={user.id} {...user} clickHandler={() => setLoggedinUser(user)} />
            ))}
        </div>
    )

    return (
        <NavigationContainer>
            <Navigationitem>
                <NavLink to={'/'}>My Repositories</NavLink>
            </Navigationitem>
            <Navigationitem>
                <NavLink to={'/projects'}>Projects</NavLink>
            </Navigationitem>
            <Navigationitem>
                {noUser}
            </Navigationitem>
            {showMenu ? userMenu : null}
        </NavigationContainer>
    )
}

export default NavigationBar
