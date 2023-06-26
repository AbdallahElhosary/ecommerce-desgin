import React from 'react'
import { Col, Row } from 'react-bootstrap'
import deletetion from "../../assets/images/delete.png";
import { Link } from 'react-router-dom';
const UserAddressCard = () => {
  return (
    <div className="user-address-card my-3 px-2">
      <Row className="d-flex justify-content-between  align-items-center">
        <Col xs="1">
          <div className="py-2">Home</div>
        </Col>
        <Col xs="4" className="d-flex justify-content-end">
          <div className="d-flex p-2 align-items-center">
            <div className="d-flex mx-2 align-items-center">
              <img
                alt=""
                className="ms-1"
                src={deletetion}
                height="17px"
                width="15px"
              />
              <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                <p className="item-delete-edit mb-0 mx-1">Edit</p>
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <img
                alt=""
                className="ms-1"
                src={deletetion}
                height="15px"
                width="15px"
              />
              <p className="item-delete-edit mb-0 mx-1">Delete</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div>
            Location: El Bagour-Menofia-Egypt
          </div>
        </Col>
      </Row>

      <Row className="mt-3 d-flex flex-row">
        <Col xs="12">
          <div>
            Phone: +201113833591
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserAddressCard