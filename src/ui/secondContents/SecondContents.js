import React from 'react'
import { FaToggleOn } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";

import Input from '../../components/input/Input'
import './SecondContents.css'
import AllUsersCard from '../../components/All-UsersCard/AllUsersCard'

const SecondContents = () => {
    return (
        <div className='secondContents-container'>
            <div className="first-section">
                <h1 className='al-users'>All Users</h1>
                <p className="filter">Filter by</p>
                <div className="filter-contents">
                    <div className="find-list">
                        <Input search='search-tog' classname='find-input' children='Find in list'/>
                    </div>
                    <div className="country-container">
                        <span className="country">Country</span>
                        <div className="down">
                            <FaSortDown/>
                        </div>
                    </div>
                    <div className="toggle-on">
                        <div className="on">
                            <FaToggleOn />
                        </div>
                        <span className="show-country">Show Country</span>
                    </div>
                   
                </div>
                <AllUsersCard/>
            
            </div>
        </div>
    )
}

export default SecondContents
