import { FunctionComponent, useState } from 'react'
import FilterItem from './FilterItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import ICategory from '../../models/ICategory'
import styled from 'styled-components'

interface FilterProps {
    category: ICategory
    updateSelected: (catId: string, optionId: string) => void
}

const FilterContainer = styled.div`
    margin-bottom: 1em;
`
const FilterButton = styled.button`
    background: unset;
    border: unset;
`

const Filter: FunctionComponent<FilterProps> = ({ category, updateSelected }) => {
    const [expanded, setExpanded] = useState(true)

    const updateSelectedOption = (optionId: string) => {
        updateSelected(category.id, optionId)
    }
    
    return (
        <>
        <FilterContainer>
            <FilterButton>
                <FontAwesomeIcon icon={(expanded ? faCaretDown : faCaretUp)} onClick={() => setExpanded(!expanded)} />
                {category.name}
            </FilterButton>
            {expanded && category.options.map((option, index) => (
                <div className='px-1' key={index} style={{border: '1px solid', margin: '2px'}}>
                    <FilterItem key={option.id} id={option.id} name={option.name} isRecommended={option.isRecommended} isChecked={option.isChecked} updateSelectedOption={updateSelectedOption} />
                </div>
            )
            )}

        </FilterContainer>
        </>
    )
}

export default Filter