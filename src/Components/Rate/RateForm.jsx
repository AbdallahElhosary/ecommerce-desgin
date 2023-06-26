import React, { useState } from 'react'
import "./Rate.scss";
import { Col, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'

const RateForm = ({ comments }) => {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }
    return (
        <div>
            <Row className="mt-3 ">
                <Col sm="12" className="me-5  d-flex align-items-center">
                    <div className="rate-name  d-inline ms-3 mt-1 mx-2">Abdallah Elhosary</div>
                    <Rating
                        onClick={handleRating}
                        size={20}
                        initialValue={rating} />
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <textarea
                        className="input-form-area p-2 mt-3 w-100"
                        placeholder="Write Comment...."
                    />
                    <div className=" d-flex al">
                        <div className="btn btn-outline-dark text-center rounded-pill">Add Comment</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RateForm