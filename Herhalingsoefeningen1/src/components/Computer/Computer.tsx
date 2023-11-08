import { FunctionComponent } from "react";
import IComputer from "../../models/IComputer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import { getCategoryName, getCategoryValue } from "../../api/dataApi";

interface ComputerProps {
  computer: IComputer;
}

const Computer: FunctionComponent<ComputerProps> = ({ computer }) => {
    // const categories: string[] = ['Schermdiagonaal', 'Processor', 'Werkgeheugen']
    const navigate = useNavigate()

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{computer.name}</Card.Header>
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
            <div style={{fontSize: '6rem', textAlign: 'center'}}>
                <FontAwesomeIcon icon={faLaptop} />
            </div>
          <Card.Text>
            <span>
            {/* {Object.keys(computer.options).map((key, index) => (
                (categories.indexOf((getCategoryName(key) || '')) !== -1) &&
                <span key={index}>{index !== 0 && ' | '}{getCategoryValue(key, computer.options[key])}</span>
            ))} */}
            {computer.info}
            <br />
            </span>
            <span className="fw-bold">€ {computer.price}</span>
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={() => navigate(computer.id)}>Details</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Computer;
