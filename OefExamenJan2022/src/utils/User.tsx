import { FunctionComponent } from 'react'
import styled from 'styled-components'

const UserContainer = styled.div`
display: flex;
background-color: #1d2025;
color: white;
border-bottom: 1px solid #5e5d5d;
border-top: 1px solid #5e5d5d;
padding: .5em;
width: 20em;
>div {
    justify-content: center;
    display: flex;
    flex-direction: column;
}
&:hover {
    background-color: #373A3F;
    cursor: pointer;
}
`

const Avatar = styled.img`
border-radius: 50px;
height: 3em;
margin-right: .5em;
`
interface UserProps {
    firstName: string
    lastName: string
    email: string
    avatar: string
    clickHandler: () => void
}

/**
 * Een component die informatie over een gebruiker weergeeft.
 *
 * @param firstName {string} De voornaam van de gebruiker.
 * @param lastName {string} De achternaam van de gebruiker.
 * @param email {string} Het e-mailadres van de gebruiker.
 * @param avatar {string} De URL van de profielfoto van de gebruiker.
 * @param clickHandler {() => void} Een functie die opgeroepen wordt als er op deze component gedrukt wordt.
 */
const User: FunctionComponent<UserProps> = ({firstName, lastName, email, avatar, clickHandler}) => {
    
    const handleClick = () => {
        if (clickHandler) {
            clickHandler()
        }
    }

    return (
        <UserContainer onClick={handleClick}>
            <Avatar src={avatar}/>
            <div>
                <div>{firstName} {lastName}</div>
                <div>{email}</div>
            </div>
        </UserContainer>
    )
}

export default User