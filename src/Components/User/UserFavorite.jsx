import React from 'react'
import { Row } from 'react-bootstrap'
import Paginate from '../uttilies/Pagination/Pagination'
import ProductCard from '../ProductCard/ProductCard'
const UserFavorite = () => {
    return (
        <div>
            <h2 className='my-2'>Favorite List</h2>
            <Row className='justify-content-start'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
            <Paginate />
        </div>
    )
}
export default UserFavorite