import {FunctionComponent, ReactNode} from 'react'

interface AccordionProps {
    children: ReactNode
}

const Accordion: FunctionComponent<AccordionProps> = ({children}) => {
    return (
        <div className={'accordion'}>
            {children}
        </div>
    )
}

export default Accordion
