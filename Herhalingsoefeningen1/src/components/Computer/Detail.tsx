import { FunctionComponent } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryName, getCategoryValue, getComputer } from "../../api/dataApi";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

interface DetailProps {}

const Detail: FunctionComponent<DetailProps> = () => {
  const { id } = useParams();
  const computer = getComputer(id);

  if (!computer) {
    return <h1>Computer not found</h1>;
  }
  return (
    <>
      <Card>
        <Card.Header>{computer.name}</Card.Header>
        <Row className={'g-0'}>
                <Col>
                    <ListGroup variant="flush">
                        <ListGroupItem>Prijs</ListGroupItem>
                        {Object.keys(computer.options).map((key) => (  
                    <ListGroupItem key={key}>{getCategoryName(key)}</ListGroupItem>
            ))}
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup variant="flush">
                        <ListGroupItem>€ {computer.price},- </ListGroupItem>
                        {Object.keys(computer.options).map((key) => (
                <ListGroupItem key={key}>{getCategoryValue(key, computer.options[key])}</ListGroupItem>
            ))}
                    </ListGroup>
                </Col>
            </Row>

            <Card.Footer>
                <Link to="/laptops">Back</Link>
            </Card.Footer>
      </Card>
    </>
  );
};

export default Detail;
