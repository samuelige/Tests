import React from 'react'

const UsersList = () => {
    return (
        <div className='users-list-container'>
            <div className="result-and-close-button">
                <div className="return-arrow-icon"></div>
                <h3>RESULT</h3>
            </div>
            <div className="profile-container">
                <div className="picture-toggle"></div>
                <div className="sub-profile-container">
                    <h4 className="full-name"></h4>
                    <h4 className="full-address"></h4>
                    <div className="email-card"></div>
                    <div className="year-joined"></div>
                    <div className="phone">
                        <div className="phone-icon"></div>
                        <h5 className="phone-number"></h5>
                    </div>
                    <div className="phone">
                        <div className="phone-icon"></div>
                        <h5 className="phone-number"></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersList
