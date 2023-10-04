import {FunctionComponent, ReactNode} from 'react'

interface AccordionItemProps {
    children: ReactNode
    title: string
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({children, title}) => {
    const isOpen = false

    return (
        <div className={'accordion-item'}>
            <div className={'title'}>{title}</div>
            <div className={'chevron'}>
                {isOpen ? <button>&and;</button> : <button>&or;</button>}
            </div>
            <div className={'content'}>
                {isOpen && children}
            </div>
        </div>
    )
}

export default AccordionItem
