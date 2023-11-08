import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import IFilter from '../models/IFilter'

interface RadioFieldSetProps {
    title: string
    options: IFilter[]
    currentValue: string | undefined
    setCurrentValue: Dispatch<SetStateAction<string | undefined>>
}

const RadioFieldSet: FunctionComponent<RadioFieldSetProps> = ({ title, options, currentValue, setCurrentValue }) => {
    return (
        <fieldset>
            <legend>{title}</legend>
                <label>
                    <input type="radio" checked={currentValue === undefined} onChange={() => setCurrentValue(undefined)} />
                    Show all
                </label>
            {options.map((option, index) => (
                <label key={index}>
                    <input type="radio" checked={currentValue === option.id} onChange={() => setCurrentValue(option.id)} />
                    {option.name}
                </label>
            ))}
        </fieldset>
    )
}

export default RadioFieldSet