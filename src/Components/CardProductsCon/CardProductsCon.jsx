import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../uttilies/subTitle/SubTitle'
import ProductCard from '../ProductCard/ProductCard'

const CardProductsCon = ({btnTitle ,title , pathText}) => {
    return (
        <Container>
            <SubTitle title={title} btntitle={btnTitle} pathText="/products" />
            <Row className="my-2 justify-content-around d-flex">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </Container>
    )
}

export default CardProductsCon