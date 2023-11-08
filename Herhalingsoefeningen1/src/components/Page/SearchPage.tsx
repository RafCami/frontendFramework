import { FunctionComponent, useState } from 'react'
import FilterBar from '../Filter/FilterBar'
import ICategory from '../../models/ICategory'
import { getCategories, getFilteredComputersWithPagination } from '../../api/dataApi'
import ScrollWrapper from '../Scroll/ScrollWrapper'
import PaginationWrapper from '../PaginationWrapper'
import { Col, Container, Row } from 'react-bootstrap'
import ComputerList from '../Computer/ComputerList'

interface SearchPageProps {
    
}

const SearchPage: FunctionComponent<SearchPageProps> = () => {
    const [filters, setFilters] = useState<ICategory[]>(getCategories)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const {data: computers, pages: totalPages} = getFilteredComputersWithPagination(6, currentPage)

    const filterUpdate = (): void => {
        setFilters(getCategories())
        setCurrentPage(0)
    }

    return (
        <Container className='mt-5'>
            <Row>
                <Col sm={3}>
                    <ScrollWrapper heigth={85}>
                        <FilterBar categories={filters} setCategories={filterUpdate} />
                    </ScrollWrapper>
                </Col>
                <Col sm={9}>
                    <PaginationWrapper height={75} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}>
                        <ComputerList computers={computers} />
                    </PaginationWrapper>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchPage