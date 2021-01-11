import React from 'react'
import { Avatar } from '@material-ui/core'
import { FaArrowLeft } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
// import { FaTabletAlt } from "react-icons/fa";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';


import './UsersList.css'

const UsersList = () => {
    return (
        <div className='users-list-container'>
            <div className="result-and-return-button">
                <FaArrowLeft className="return-arrow-icon" />
                <h3 >RESULTS</h3>
            </div>
            <div className="profile-container">
                <div className="picture-toggle">
                    <Avatar  className='avatar' src='' />
                </div>
                <div className="sub-profile-container">
                    <h4 className="full-name"> Lorem ipsum dolor.</h4>
                    <h4 className="full-address">Lorem ipsum dolor sit amet consectetur.</h4>
                    <div className="email-card">
                        <BiEnvelope className='contact-icon-email' />
                        <h4>Lorem ipsum dolor sit amet.</h4>
                    </div>
                   
                    <div className="year-joined"></div>
                    <h4 className='years'>Lorem ipsum dolor sit.</h4>
                    
                    <div className="phone">
                        <BiPhoneCall className='contact-icons-cell'/>
                        <h5 className="phone-number">111-11-111</h5>
                    </div>
                    <div className="phone-second">
                        <PhoneIphoneIcon  className='contact-icons-cell'/>
                        <h5 className="phone-number">111-11-111</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersList
