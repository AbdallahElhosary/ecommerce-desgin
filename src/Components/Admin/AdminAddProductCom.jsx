import React from 'react'
import { Row, Col, FloatingLabel, Form, FormControl } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../assets/images/avatar.png'
import add from '../../assets/images/add.png'
const AdminAddProductCom = () => {
  const onSelect = () => {

  }
  const onRemove = () => {

  }

  const options = [
    { name: "Hp", id: 1 },
    { name: "Dell", id: 2 },
    { name: "Apple", id: 3 },
  ];
  return (
    <div>
      <Row className="justify-content-start ">
        <h2>Add New Product</h2>
        <Col sm="8">
          <div className="text-form pb-2">Producy Image</div>
          <img src={avatar} alt="" height="100px" width="120px" />
          <FloatingLabel controlId="floatingPassword" label="Product Name" className="my-3">
            <Form.Control type="text" placeholder="Product Name" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Product Description">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <FormControl type="number" step={1}  className='my-2' placeholder='Discount Price' />
          <FormControl type="number" step={1} className='my-2' placeholder='Product Price' />
          <Form.Select aria-label="Default select example" className='my-2'>
            <option>Main Product</option>
            <option value="1">First Product</option>
            <option value="2">Second Product</option>
            <option value="3">Third Product</option>
            <option value="4">Fourth Product</option>
          </Form.Select>
          <Multiselect
            className="mt-2"
            placeholder="Sub-Product"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            showArrow={true}
            style={{ color: "red" }}
          />
          <Form.Select aria-label="Default select example" className='my-2'>
            <option>Brand</option>
            <option value="1">Apple</option>
            <option value="2">Dell</option>
            <option value="3">HP</option>
            <option value="4">Asus</option>
          </Form.Select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "#E52C2C" }}></div>
            <div
              className="color ms-2 border mt-1 "
              style={{ backgroundColor: "white" }}></div>
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "black" }}></div>
            <img src={add} alt="" width="30px" height="35px" className="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="my-2 btn btn-dark rounded-pill">Save Edit</button>
        </Col>
      </Row>
    </div>
  )
}

export default AdminAddProductCom