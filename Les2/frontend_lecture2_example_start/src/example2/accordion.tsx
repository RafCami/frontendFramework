import {PropsWithChildren,FunctionComponent, useState, createContext} from 'react'

interface IAccordionContext {
    currentOpenKey: string | undefined
    toggleOpenKey: (newOpenKey: string | undefined) => void
}

export const AccordionContext = createContext<IAccordionContext>({
    currentOpenKey: undefined,
    toggleOpenKey: (): void => {
        console.warn('An implementation for this method has not been provided.')
    },
})

interface AccordionProps extends PropsWithChildren {
    defaultOpenKey?: string
}

const Accordion: FunctionComponent<AccordionProps> = ({children, defaultOpenKey}) => {
    const [currentOpenKey, setCurrentOpenKey] = useState<string | undefined>(defaultOpenKey)

    const toggleOpenKey = (newOpenKey: string | undefined) => {
        if (currentOpenKey === newOpenKey) {
            setCurrentOpenKey(undefined)
        } else {
            setCurrentOpenKey(newOpenKey)
        }
    }

    return (
        <AccordionContext.Provider value={{currentOpenKey, toggleOpenKey}}>
            <div className={'accordion'}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

export default Accordion
