import React from 'react'
import "./Footer.css";
import { Container, Col ,Row} from "react-bootstrap";
import facebook from "../../../assets/images/facebook.png";
import instagram from "../../../assets/images/instagram.png";
import twitter from "../../../assets/images/twitter.png";
import phone from "../../../assets/images/phone.png";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" lg="4" className="d-flex align-items-center ">
                        <div className="footer-shroot ">Terms and Conditions</div>
                        <div className="footer-shroot mx-2">Privacy</div>
                        <div className="footer-shroot mx-2">Call Us</div>
                    </Col>
                    <Col
                        sm="6" lg="4"
                        className="d-flex justify-content-end align-items-center ">
                        <div className="d-flex pt-3 mx-2">
                            <img width="20px" height="20px" src={phone} alt="" />
                            <p className="footer-phone">01113833591</p>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={facebook} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={instagram} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={twitter} alt="" />
                        </div>
                    </Col>
                    <Col sm="6" lg="4" className="d-flex align-items-center ">
                        <Link to="https://www.linkedin.com/in/abdallh-elhosary-a41671220/" target='_blank' className="linkedin-link">By <span className='myName'>Abdallah Elhosary</span></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer