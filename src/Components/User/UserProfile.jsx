import React from 'react'
import { Row, Col,Form } from 'react-bootstrap'
import deletion from '../../assets/images/delete.png';
const UserProfile = () => {
  return (
    <div>
      <h2 className='fw-bold my-2'>Profile</h2>
      <div className="user-address-card my-3 p-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="12" className="d-flex justify-content-between">
            <div>Information</div>
            <div className="d-flex mx-2 align-items-center">
              <img
                alt=""
                className="ms-1 mx-1"
                src={deletion}
                height="17px"
                width="15px"
              />
              <p className="mb-0"> Edit</p>
            </div>
          </Col>
          <Col xs="12" className="d-flex align-items-center flex-wrap">
            <div className="p-2">Name:</div>
            <div className="p-1">Abdullah Elhosary</div>
          </Col>
          
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex align-items-center flex-wrap">
            <div className="p-2">Phone:</div>
            <div className="p-1">+201113833591</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex align-items-center flex-wrap">
            <div className="p-2">Email:</div>
            <div className="p-1">abdallhelhosary@gmail.com</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <h4 className="fw-bold">Change Password</h4>
            <Form.Label htmlFor="inputPassword5">Past Passsword</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Label htmlFor="inputPassword6" className='my-2'>New Passsword</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword6"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Label htmlFor="inputPassword6" className='my-2'>Confirm Passsword</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword6"
              aria-describedby="passwordHelpBlock"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex">
            <button className="mt-2 btn btn-dark rounded-pill">Save Password</button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default UserProfile