import {FunctionComponent, ReactNode, useContext} from 'react'
import {AccordionContext} from './accordion.tsx'

interface AccordionItemProps {
    children: ReactNode
    title: string
    openKey: string
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({children, title, openKey}) => {
    const {currentOpenKey, toggleOpenKey} = useContext(AccordionContext)
    const isOpen = openKey === currentOpenKey

    return (
        <div className={'accordion-item'}>
            <div className={'title'}>{title}</div>
            <div className={'chevron'} onClick={() => toggleOpenKey(openKey)}>
                {isOpen ? <button>&and;</button> : <button>&or;</button>}
            </div>
            <div className={'content'}>
                {isOpen && children}
            </div>
        </div>
    )
}

export default AccordionItem
