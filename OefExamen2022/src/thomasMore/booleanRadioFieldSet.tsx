import { Dispatch, FunctionComponent, SetStateAction } from 'react'

interface BooleanRadioFieldSetProps {
    title: string
    trueTitle: string
    falseTitle: string
    currentValue: boolean | undefined
    setCurrentValue: Dispatch<SetStateAction<boolean | undefined>>
}

const BooleanRadioFieldSet: FunctionComponent<BooleanRadioFieldSetProps> = ({ title, trueTitle, falseTitle, currentValue, setCurrentValue }) => {
    return (
        <fieldset>
            <legend>{title}</legend>
            <label>
                <input type="radio" checked={currentValue === undefined} onChange={() => setCurrentValue(undefined)} />
                Show all
            </label>
            <label>
                <input type="radio" checked={currentValue === true} onChange={() => setCurrentValue(true)} />
                {trueTitle}
            </label>
            <label>
                <input type="radio" checked={currentValue === false} onChange={() => setCurrentValue(false)} />
                {falseTitle}
            </label>
        </fieldset>
    )
}

export default BooleanRadioFieldSet