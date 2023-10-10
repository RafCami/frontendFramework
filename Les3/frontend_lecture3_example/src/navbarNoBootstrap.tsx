import styled from 'styled-components'
import {CSSProperties, FunctionComponent} from 'react'

const NavUL = styled.ul`
  list-style: none;
`

const NavLi = styled.li`
  display: inline-block;
  margin: 1em;
`

const NavBarNoBootstrap: FunctionComponent = () => {
    const activeStyle: CSSProperties = {
        color: '#49DE73',
    }

    const chooseStyle = ({isActive}: {isActive: boolean}): CSSProperties => {
        return isActive ? activeStyle : {}
    }

    return (
        <NavUL>
            <NavLi><a href={'/'}>Home</a></NavLi>
            <NavLi><a href={'/foo'}>Foo</a></NavLi>
            <NavLi><a href={'/bar'}>Bar</a></NavLi>
            <NavLi><a href={'/class'}>Class</a></NavLi>
        </NavUL>
    )
}
export default NavBarNoBootstrap
