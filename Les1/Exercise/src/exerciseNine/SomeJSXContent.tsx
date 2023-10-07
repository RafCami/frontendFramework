import { FunctionComponent, PropsWithChildren } from 'react'

interface SomeJSXContentProps extends PropsWithChildren {
    
}

const SomeJSXContent: FunctionComponent<SomeJSXContentProps> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default SomeJSXContent