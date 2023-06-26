import React from 'react'
import "./Brand.css"
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../uttilies/subTitle/SubTitle'
import BrandCard from './BrandCard'
import com1 from "../../assets/images/brand1.png"
import com2 from "../../assets/images/brand2.png"
import com3 from "../../assets/images/brand3.png"



const BrandFeatured = ({title , btnTitle }) => {
  return (
    <Container>
            <SubTitle title={title} btntitle={btnTitle} pathText="/allbrand" />
            <Row className="my-1 justify-content-around d-flex">
                <BrandCard img={ com1} />
                <BrandCard img={ com2} />
                <BrandCard img={ com3} />
                <BrandCard img={ com1} />
                <BrandCard img={ com2} />
                <BrandCard img={ com3} />

            </Row>
    </Container>
  )
}

export default BrandFeatured