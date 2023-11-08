import {FunctionComponent} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

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

const NavigationBar: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Navigationitem>
                <NavLink to={'/'}>My Repositories</NavLink>
            </Navigationitem>
            <Navigationitem>
                <NavLink to={'/projects'}>Projects</NavLink>
            </Navigationitem>
        </NavigationContainer>
    )
}

export default NavigationBar
