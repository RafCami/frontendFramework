import { FunctionComponent, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { getAllRegions } from '../../api/capitalsAPI'
import { getHighscoresForLocation } from '../../api/highscoresAPI'
import styled from 'styled-components'

const StyledCol: typeof Col = styled(Col)`
        max-height: 80vh !important;
        overflow: scroll;

    `

interface TwoColumnLayoutProps {
    region?: string
    setRegion: (newRegion: string) => void
}

const TwoColumnLayout: FunctionComponent<TwoColumnLayoutProps> = ({ region, setRegion }) => {
    const [selectedName, setSelectedName] = useState<string | undefined>(undefined)
    
    return (
        <>
            <h1>Two Column Layout</h1>
            <Row>
                <Col xs={4}><h2>Locations</h2></Col>
                <Col xs={8}><h2>Highscores</h2></Col>
            </Row>
            <Row>
                <StyledCol xs={4}>
                    <ListGroup as="ul" variant="flush">
                        {getAllRegions().map(r => {
                            return (
                                <ListGroup.Item as="li" active={r === region} onClick={() => setRegion(r)} key={r}>
                                    {r}
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </StyledCol>
                <StyledCol xs={8}>
                    {region && (
                        <ListGroup as="ul" variant="flush">
                            {getHighscoresForLocation(region).map(h => {
                                return (
                                    <ListGroup.Item as="li" key={h.id} active={h.name === selectedName} onClick={() => setSelectedName(h.name)}>
                                        {h.name} - {h.score}/{h.nbQuestions} - {Math.round(h.score / h.nbQuestions * 100)}%
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    )}
                </StyledCol>
            </Row>
        </>
    )
}

export default TwoColumnLayout