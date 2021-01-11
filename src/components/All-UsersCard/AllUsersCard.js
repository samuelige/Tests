import React from 'react'
import { Avatar } from '@material-ui/core'
import { BiEnvelope } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import './AllUsersCard.css'

const AllUsersCard = () => {
    return (
        <div className='users-card-container'>
            <div className="profile-picture">
                <Avatar  className='picture-avatar' src='' />
            </div>
            <div className="user-details">
                <h3 className="title">Lorem ipsum </h3>
                <h5 className="address">Lorem ipsum dolor sit amet consectetur.</h5>
                <div className="contacts">
                    <div className="e-address">
                        <BiEnvelope className='contact-icon-email' />
                        <h5 className="email">Lorem ipsum dolor sit .</h5>
                    </div>
                    <div className="cell">
                        <BiPhoneCall className='contact-icons-cell'/>
                        <h5 className="cell-number">233---33</h5>
                    </div>
                    <button className="arrow-icon">
                        <FaArrowRight className='arrow'/>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default AllUsersCard
