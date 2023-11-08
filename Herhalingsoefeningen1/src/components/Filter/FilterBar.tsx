import { FunctionComponent } from 'react'
import { toggleOptionSelected } from '../../api/dataApi'
import ICategory from '../../models/ICategory'
import Filter from './Filter'

interface FilterBarProps {
    categories: ICategory[]
    setCategories: () => void
}

const FilterBar: FunctionComponent<FilterBarProps> = ({ categories, setCategories }) => {

    const updateSelected = (catId: string, optionId: string) => {
        toggleOptionSelected(catId, optionId)
        setCategories()
    }

    return (
        <>
        {categories.map((category) => (
            <Filter key={category.id} category={category} updateSelected={updateSelected} />
        ))}
        </>
    )
}

export default FilterBar