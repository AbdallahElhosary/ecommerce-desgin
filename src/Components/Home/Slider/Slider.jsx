import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import "./Slider.css";
import slider4 from "../../../assets/images/prod1.png"
import sliderimg from "../../../assets/images/prod3.png"
import prod3 from "../../../assets/images/prod4.png"


const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={slider4}
                        alt="First slide"
                    />
                    <div className="caption">
                        <h3 className="slider-title">Great Discount !</h3>
                        <p className="slider-text">Up to 50% off your purchase</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={sliderimg}
                        alt="First slide"
                    />
                    <div className="caption">
                        <h3 className="slider-title">Great Discount !</h3>
                        <p className="slider-text">Up to 50% off your purchase</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={prod3}
                        alt="First slide"
                    />
                    <div className="caption">
                        <h3 className="slider-title">Great Discount !</h3>
                        <p className="slider-text">Up to 50% off your purchase</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={prod3}
                        alt="First slide"
                    />
                    <div className="caption">
                        <h3 className="slider-title">Great Discount !</h3>
                        <p className="slider-text">Up to 50% off your purchase</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider