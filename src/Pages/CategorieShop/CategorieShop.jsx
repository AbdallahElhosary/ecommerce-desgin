import React from 'react'
import CategorieHeader from '../../Components/Categorie/CategorieHeader/CategorieHeader'
import FilterCount from '../../Components/uttilies/FilterCount/FilterCount'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../Components/uttilies/SideBar/SideBar'
import CardProductsCon from '../../Components/CardProductsCon/CardProductsCon'
import Pagination from '../../Components/uttilies/Pagination/Pagination'

const CategorieShop = () => {
    return (
        <div style={{ minHeight: "50vh" }}>
            <CategorieHeader />
            <Container>
                <FilterCount />

                <Row>
                    <Col sm="2" xs="3" md='2'>
                        <SideBar />
                    </Col>
                    <Col sm="9" xs="9" md='10'>
                        <CardProductsCon />
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    )
}

export default CategorieShop