import React from 'react'
import "./Rate.scss";
import { Col, Container, Row } from 'react-bootstrap'
import rate from "../../assets/images/rate.png";
import RateComments from './RateComments';
import RateForm from './RateForm';
import Paginate from '../uttilies/Pagination/Pagination';
const RateContainer = () => {
    const comments = [
        { id: 1, name: "Abdallah", rate: 4.3, text: "I absolutely love this product! It's everything I was hoping for and more. It's well-made, easy to use, and really delivers on its promises.." },
        { id: 2, name: "Ahmed", rate: 4.4, text: "Overall, I'm pretty happy with this product. It's not perfect, but it gets the job done and I appreciate the value for the price." },
        { id: 3, name: "Eyad", rate: 4.2, text: "I absolutely love this product! It's everything I was hoping for and more. It's well-made, easy to use, and really delivers on its promises.." },
        { id: 4, name: "Amr", rate: 4.5, text: "I'm still on the fence about this product. There are some things I really like about it, but I'm not sure if it's worth the investment for me." },
        { id: 5, name: "Kamal", rate: 4.1, text: "Unfortunately, this product didn't live up to my expectations. I had a few issues with it and ultimately decided to return it." },
    ];
    return (
        <Container className="rate-container">
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Rates</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 Rate)</div>
                </Col>
            </Row>
            <RateForm comments={comments} />
            <RateComments comments={comments} />
            <Paginate />
        </Container>
    )
}

export default RateContainer