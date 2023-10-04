import {FunctionComponent} from 'react'

interface AvatarProps {
    avatar: string,
}

const Avatar: FunctionComponent<AvatarProps> = ({avatar}) => {
    return (
        <img className='avatar' src={avatar} alt="" />
    )
}

export default Avatar