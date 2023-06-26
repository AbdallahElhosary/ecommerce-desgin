import React from 'react'
import { Row, Col, FloatingLabel, Form } from 'react-bootstrap'
const AdminAddSubCategoriyCom = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <h2>Add New SubCategoiry</h2>
        <Col sm="8">
          <FloatingLabel controlId="floatingPassword" label="Categoriy Name" className="my-3">
            <Form.Control type="text" placeholder="Categoriy Name" />
          </FloatingLabel>
          <Form.Select aria-label="Default select example">
            <option>First Categoriy</option>
            <option value="1">Second Categoriy</option>
            <option value="2">Third Categoriy</option>
            <option value="3">Fourth Categoriy</option>
          </Form.Select>
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

export default AdminAddSubCategoriyCom