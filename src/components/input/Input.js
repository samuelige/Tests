import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

import './Input.css'

const Input = ({children}) => {
    return (
        <div className="input"> 
            <SearchIcon className='search'/>
            <input type="text" className='input-field' placeholder={children}/>
        </div>
    )
}

export default Input
