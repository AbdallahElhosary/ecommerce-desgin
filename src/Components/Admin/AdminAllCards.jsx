import { Card, Col, Row } from 'react-bootstrap'
import prod1 from "../../assets/images/prod1.png";
import { Link } from 'react-router-dom';
const AdminAllCards = () => {
    return (
        <Col xs="12" sm="6" md="6" lg="3" className="d-flex">
            <Card
                className="my-2 card-item card"
                style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit">Delete</div>
                        <div className="d-inline item-delete-edit">Edit</div>
                    </Col>
                </Row>
                <Link to="/products/:id" style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                Mac Book Laptop 2017
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex align-items-center">
                                    <div className="card-currency mx-1">EGP</div>
                                    <div className="card-price">880</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllCards