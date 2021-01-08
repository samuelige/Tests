import React, {useState} from 'react'
import { FaUsers } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

import './Users.css'

const UserComponent = ({otherprops}) => {
    return (
        <div classsName='userComponent' >
            <div className="all-users">
                <button className={otherprops.classname}>{otherprops.icon}</button>
                <span className="allUsers">{otherprops.title}</span>
            </div>
        </div>
    )
}

const Users = () => {
    const [usersState, setUsersState] = useState([
        {
            classname: 'first' ,
            icon: <FaUsers/>,
            title: 'All Users',
        },
        {
            classname: 'second',
            icon: <FaMale/>,
            title: 'Male Users',
        },
        {
            classname:'third',
            icon: <FaFemale/>,
            title: 'Female Users',
        }
    ])
    return (
        <div className='showUsers-container'>
            {
                usersState &&
                usersState.map(({...otherprops}) => {
                    return (
                        <UserComponent otherprops={otherprops}/>
                    )
                })
            }
        </div>
    )
}

export default Users
