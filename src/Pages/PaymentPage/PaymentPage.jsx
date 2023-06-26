import React from 'react'
import "./PaymentPage.scss";
import { Row, Col, Container } from 'react-bootstrap'

const PaymentPage = () => {
    return (
        <Container>
            <h4 className="pt-5">Choose the payment method</h4>
            <div className="my-3 px-3">
                <Row className="d-flex justify-content-between  align-items-center">
                    <Col md="6" xs="12">
                        <div className="wrapper">
                            <input type="radio" name="select" id="option-1" checked />
                            <input type="radio" name="select" id="option-2" />
                            <label for="option-1" className="option option-1">
                                <div className="dot"></div>
                                <span>Pay by credit card</span>
                            </label>
                            <label for="option-2" className="option option-2">
                                <div className="dot"></div>
                                <span>Pay when recieving</span>
                            </label>
                        </div>
                    </Col>
                </Row>

            </div>

            <Row>
                <Col xs="12" className="d-flex">
                    <div className="product-cart-add px-3 pt-2 me-2">Buy</div>
                    <div className="product-price  border">34000 EGP</div>
                </Col>
            </Row>
        </Container>
    )
}

export default PaymentPage