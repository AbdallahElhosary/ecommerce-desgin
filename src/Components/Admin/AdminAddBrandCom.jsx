import React from 'react'
import { Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import avatar from '../../assets/images/avatar.png'
const AdminAddBrandCom = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <h2>Add New Brand</h2>
        <Col sm="8">
          <div className="text-form pb-2">Brand Photo</div>
          <img src={avatar} alt="" height="100px" width="120px" />
          <FloatingLabel controlId="floatingPassword" label="Brand Name" className="my-3">
            <Form.Control type="text" placeholder="Brand Name" />
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

export default AdminAddBrandCom