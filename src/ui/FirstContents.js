import React from 'react'

import Input from '../components/input/Input'
import Users from '../components/users/Users'
import './FirstContents.css'

const FirstContents = () => {
    return (
        <div className="first-contents-mainContainer">
            <div className="hello">
                <h1 className='hello-text'>Hello,</h1> 
                <span className='emerald'>Emerald</span>
            </div> 
            <p className='welcome'>welcome to your dashboard, kindly sort through the user base</p>

            <div className="subContainer">
                <Input search='search' classname="input" children='Find a user'/>
            </div>

            <h3 className='showUsers'> Show Users</h3>

            <div className='first-contents-users-container'>
                <Users />
            </div>
        </div>
    )
}

export default FirstContents
