import { FunctionComponent } from 'react'

interface FilterItemProps {
    id: string
    name: string
    isChecked: boolean
    isRecommended?: boolean
    updateSelectedOption: (optionId: string) => void
}

const FilterItem: FunctionComponent<FilterItemProps> = ({ id, name, isChecked, isRecommended = false, updateSelectedOption }) => {
    return (
        <>
            <input type='checkbox' id={name} name={name} checked={isChecked} onChange={() => updateSelectedOption(id)}  />
            <label htmlFor={name}>{name}<span className='text-success'>{isRecommended && ' Aanbevolen'}</span></label>
        </>
    )
}

export default FilterItem