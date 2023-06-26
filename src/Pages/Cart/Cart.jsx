import React from 'react'
import "./Cart.scss";
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Components/Cart/CartItem/CartItem';
import CartCheckout from '../../Components/Cart/CartCheckout/CartCheckout';

const Cart = () => {
    return (
        <Container className='mt-3 mb-3'>
            <Row>
                <Col md="9" xs="12">
                    <div className="cart-title">Cart Products</div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </Col>
                <Col md="3" xs="12">
                    <CartCheckout />
                </Col>
            </Row>
        </Container>
    )
}

export default Cart