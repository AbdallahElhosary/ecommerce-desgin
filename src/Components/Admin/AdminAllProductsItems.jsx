import React from 'react'
import AdminAllCards from "./AdminAllCards";
import { Row } from 'react-bootstrap';
import Paginate from '../uttilies/Pagination/Pagination'
const AdminAllProductsItems = () => {
  return (
    <div>
      <h2>Manage Products</h2>
      <Row>
        <AdminAllCards />
        <AdminAllCards />
        <AdminAllCards />
        <AdminAllCards />
        <AdminAllCards />
      </Row>
      <Paginate />
    </div>
  )
}

export default AdminAllProductsItems