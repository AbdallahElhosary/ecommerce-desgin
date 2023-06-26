import React from 'react'
import "./SubTitle.css";
import { Link } from 'react-router-dom'

const SubTitle = ({ title, btntitle, pathText }) => {
    return (
        <div className="d-flex justify-content-between  align-items-center pt-4">
            <div className="sub-title fw-bold">{title}</div>
            {btntitle ? (
                <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <button className="cta">
                        <span>{ btntitle}</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Link>
            ) : null}
        </div>
    )
}

export default SubTitle