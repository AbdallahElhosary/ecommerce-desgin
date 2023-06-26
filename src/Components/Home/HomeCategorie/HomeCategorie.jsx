import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../../uttilies/subTitle/SubTitle'
import CategorieCard from '../../Categorie/CategorieCard/CategorieCard'
import item from "../../../assets/images/clothe.png";
import item1 from "../../../assets/images/labtop.png";
import item2 from "../../../assets/images/laptops.png";
const HomeCategorie = () => {
  return (
    <Container>
      <SubTitle title="Categories" btntitle="More" pathText="/allcategorie" />
      <Row className="my-2 justify-content-around d-flex">
        <CategorieCard title="Phone" background="#f6f6f6" img={item} />
        <CategorieCard title="Phone" background="#f6f6f6" img={item1} />
        <CategorieCard title="Phone" background="#f6f6f6" img={item2} />
        <CategorieCard title="Phone" background="#f6f6f6" img={item} />
        <CategorieCard title="Phone" background="#f6f6f6" img={item1} />
        <CategorieCard title="Phone" background="#f6f6f6" img={item2} />
      </Row>
    </Container>
  )
}

export default HomeCategorie