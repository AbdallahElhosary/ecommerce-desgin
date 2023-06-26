import React from 'react'
import { Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import avatar from '../../assets/images/avatar.png'
const AdminAddCategoriyCom = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <h2>Add New Categoriy</h2>
        <Col sm="8">
          <div className="text-form pb-2">Categoriy Photo</div>
          <img src={avatar} alt="" height="100px" width="120px" />
          <FloatingLabel controlId="floatingPassword" label="Categoriy Name" className="my-3">
            <Form.Control type="text" placeholder="Categoriy Name" />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="my-2 btn btn-dark">Save Edit</button>
        </Col>
      </Row>
    </div>
  )
}
export default AdminAddCategoriyCom