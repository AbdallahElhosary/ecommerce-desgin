import React from 'react'
import "./ProductCard.css"
import { Card, Col } from 'react-bootstrap'
import prod1 from "../../assets/images/prod1.png";
import favoff from "../../assets/images/fav-off.png";
import rate from "../../assets/images/rate.png";
import { Link } from 'react-router-dom';
const ProductCard = () => {
    return (
        <Col xs="12" sm="12" md="6" lg="4"  className="d-flex">

            <Card
          className="my-2 card-item"
                style={{
                    
                }}>
                <Link to="/products/:id" style={{ textDecoration: 'none' }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
                </Link>
                <div className="d-flex justify-content-end mx-2">
                    <img
                        src={favoff}
                        alt=""
                        className="text-center"
                        style={{
                            height: "24px",
                            width: "26px",
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                            Mac Book Laptop 2017
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">4.5</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="card-price">880</div>
                                <div className="card-currency mx-1">EGP</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard