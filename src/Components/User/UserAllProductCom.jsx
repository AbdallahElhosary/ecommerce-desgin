import React from 'react'
import UserProductItem from './UserProductItem'
import { Row, Col } from "react-bootstrap";

const UserAllProductCom = () => {
    return (
        <div>
            <h2>Hello : Abdallah</h2>
            <div>Order no #23</div>
            <UserProductItem />
            <UserProductItem />
            <Row className="d-flex justify-content-between py-2">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">State :</div>
                        <div className="d-inline mx-2 stat">Underway</div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">4000 EGP</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllProductCom