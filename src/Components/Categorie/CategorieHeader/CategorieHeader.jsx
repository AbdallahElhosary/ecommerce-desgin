import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./CategorieHeader.scss";

const CategorieHeader = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-start flex-wrap">
                    <div className='cat-text-header'>All</div>
                    <div  className='cat-text-header'>Electoric</div>
                    <div  className='cat-text-header'>Clothes</div>
                    <div  className='cat-text-header'>All</div>
                    <div  className='cat-text-header'>Electoric</div>
                    <div  className='cat-text-header'>Clothes</div>
                    <div  className='cat-text-header'>All</div>
                    <div  className='cat-text-header'>Electoric</div>
                    <div  className='cat-text-header'>Clothes</div>
                    <div  className='cat-text-header'>All</div>
                    <div  className='cat-text-header'>Electoric</div>
                    <div  className='cat-text-header'>Clothes</div>
                    <div  className='cat-text-header'>All</div>
                    <div  className='cat-text-header'>Electoric</div>
                    <div  className='cat-text-header'>Clothes</div>
                </Col>
            </Row>
        </Container>
    )
}

export default CategorieHeader