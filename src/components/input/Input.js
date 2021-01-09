import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

import './Input.css'

const Input = ({ search, classname, children}) => {
    return (
        <div className={classname}> 
            <SearchIcon className={search}/>
            <input type="text" className='input-field' placeholder={children}/>
        </div>
    )
}

export default Input
