import React from 'react'
import UserAddressCard from './UserAddressCard'
import { useNavigate } from 'react-router-dom'
const UserAdresses = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Personal Addresses</h2>
            <UserAddressCard />
            <button className="btn-add-address w-50 m-auto" onClick={() => navigate("/user/add-address")}>Add New Address</button>
        </div>
    )
}

export default UserAdresses