import { Dispatch, FunctionComponent, PropsWithChildren, SetStateAction } from 'react'
import { Pagination } from 'react-bootstrap'
import styled from 'styled-components'
import ScrollWrapper from './Scroll/ScrollWrapper'

const FlexContainer = styled.div`
display: flex;
flex-direction: column;
`
const DataContainer = styled.div`
flex-grow: 1;
flex-direction: row;
width: 100%;
justify-content: center;
.row {
    justify-content: center;
}
`

const PaginationContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 1em;
`
const StyledPageItem: typeof Pagination.Item = styled(Pagination.Item)`
width: 2.5em;
text-align: center;
`

interface PaginationWrapperProps extends PropsWithChildren {
    height?: number
    currentPage: number
    totalPages: number
    setCurrentPage: Dispatch<SetStateAction<number>>
}

const PaginationWrapper: FunctionComponent<PaginationWrapperProps> = ({ children, height, currentPage, totalPages, setCurrentPage }) => {
    // const [currentPage, setCurrentPage] = useState(0)
    // const [totalPages, setTotalPages] = useState(pages)


    let buttons = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2].filter(x => x >= 0 && x <= totalPages - 1)
    if ((currentPage === 0 || currentPage === 1) && totalPages > 4) {
        buttons.push(currentPage + 3)
        if (totalPages > 5) buttons.push(currentPage + 4)
    }
    if ((currentPage === totalPages - 2 || currentPage === totalPages - 1) && totalPages > 4) {
        buttons = [currentPage -3, ...buttons]
        if (totalPages > 5) buttons = [currentPage - 4, ...buttons]
    }

    return (
        <FlexContainer>
            <DataContainer>
                <ScrollWrapper heigth={height}>
                    {children}
                </ScrollWrapper>
            </DataContainer>
            <PaginationContainer>
                <Pagination>
                <Pagination.First onClick={() => setCurrentPage(0)} />
                <Pagination.Prev onClick={() => setCurrentPage(x => Math.max(x - 1, 0))} />
                {buttons.map((x) => (
                    <StyledPageItem key={x} active={x === currentPage}  onClick={() => setCurrentPage(x)}>{x + 1}</StyledPageItem>
                ))}
                <Pagination.Next onClick={() => setCurrentPage(x => Math.min(x + 1, totalPages - 1))} />
                <Pagination.Last onClick={() => setCurrentPage(totalPages - 1)} />
                </Pagination>
            </PaginationContainer>            
        </FlexContainer>
    )
}

export default PaginationWrapper