import React from 'react'
import { FaToggleOn } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { ImCloudDownload } from "react-icons/im";

import Input from '../../components/input/Input'
import './SecondContents.css'
import AllUsersCard from '../../components/All-UsersCard/AllUsersCard'
import UsersList from '../../components/Users-list/UsersList';


const SecondContents = () => {
    return (
        <div className='secondContents-container'>
            <div className="first-section">
                <h1 className='al-users'>All Users</h1>
                <p className="filter">Filter by</p>
                <div className="fs-filter-contents">
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
                        <h4 className="show-country">Show Country</h4>
                    </div>
                   
                </div>
                <AllUsersCard/>
                <UsersList />
            </div>
            <div className="second-section">
                <div className="down-load">
                    <ImCloudDownload className='downLoad-icon' />
                    <h4>Download results</h4>
                </div>
                <div className="direction">
                    <button className="left-arrow">
                        <FaAngleLeft className='left-icon'/>
                    </button>
                    <button className="right-arrow">
                        <FaAngleRight className='right-icon'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SecondContents
