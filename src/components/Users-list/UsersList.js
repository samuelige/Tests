import React, {useEffect} from 'react'
import { Avatar } from '@material-ui/core'
import { FaArrowLeft } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
// import { FaTabletAlt } from "react-icons/fa";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import {useHistory} from "react-router-dom";

import './UsersList.css'

const UsersList =  ({otherprops}) => {

    // router
    const history = useHistory();
    const backToHome = () => history.push('/home');

    return (
        <div className='users-list-container'>
            <div className="result-and-return-button">
                <FaArrowLeft className="return-arrow-icon" onClick={otherprops.backToHome}/>
                <h3 >RESULTS</h3>
            </div>
            <div className="profile-container">
                <div className="picture-toggle">
                    <Avatar  className='avatar' src={otherprops.picture}/>
                </div>
                <div className="sub-profile-container">
                    <h4 className="full-name"> {otherprops.name} </h4>
                    <h4 className="full-address"> {otherprops.address} </h4>
                    <div className="email-card">
                        <BiEnvelope className='contact-icon-email' />
                        <h4> {otherprops.email} </h4>
                    </div>
                   
                    <div className="year-joined"></div>
                    <h4 className='years'> Joined: {otherprops.joined} </h4>
                    
                    <div className="phone">
                        <BiPhoneCall className='contact-icons-cell'/>
                        <h5 className="phone-number"> {otherprops.cell} </h5>
                    </div>
                    <div className="phone-second">
                        <PhoneIphoneIcon  className='contact-icons-cell'/>
                        <h5 className="phone-number"> {otherprops.cell} </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersList
