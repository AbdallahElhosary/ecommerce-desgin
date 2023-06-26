import React from 'react'
import CategorieHeader from "../../../Components/Categorie/CategorieHeader/CategorieHeader";
import { Container } from 'react-bootstrap';
import ProductDetails from '../../../Components/ProductDetails/ProductDetails';
import RateContainer from '../../../Components/Rate/RateContainer';
import CardProductsCon from "../../../Components/CardProductsCon/CardProductsCon";

const ProductDetailsPage = () => {
  return (
      <div>
      <CategorieHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsCon title="Products you may like"/>
      </Container>
    </div>
  )
}

export default ProductDetailsPage