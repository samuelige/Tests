import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { Avatar } from '@material-ui/core'
import { BiEnvelope } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import './AllUsersCard.css'
import Data from '../../Data/Data';

const AllUsersCard = ({otherprops}) => {
    return (
        <div className='users-card-container'>
            <div className="profile-picture">
                <Avatar  className='picture-avatar' src={otherprops.picture} />
            </div>
            <div className="user-details">
                <h3 className="title">{otherprops.name} </h3>
                <h5 className="address">{otherprops.address}</h5>
                <div className="contacts">
                    <div className="e-address">
                        <BiEnvelope className='contact-icon-email' />
                        <h5 className="email">{otherprops.email}</h5>
                    </div>
                    <div className="cell">
                        <BiPhoneCall className='contact-icons-cell'/>
                        <h5 className="cell-number">{otherprops.cell}</h5>
                    </div>
                    <button className="arrow-icon">
                        <FaArrowRight className='arrow'/>
                    </button>
                </div>
                
            </div>
        </div>
    )
}


const AllUsers = () => {
   
    const state =  useSelector(state => state.randomData.randomData);
    console.log(state);
    const state_2 =  useSelector(state => state.secondRandomData.secondRandomData);
    const state_3 =  useSelector(state => state.thirdRandomData.thirdRandomData)
    
    const picture = state.picture.thumbnail;
    const email = state.email;
    const cell = state.cell;
    const firstname = state.name.first;
    const lastname = state.name.last;
    const name = `${firstname} ${lastname}`
    const postcode = state.location.postcode;
    const city = state.location.city;
    const statee = state.location.state;
    const country = state.location.country;
    const address = `${postcode} ${city} ${statee} ${country}`

    const picture_2 =  state_2.picture.thumbnail;
    const email_2 =  state_2.email;
    const cell_2 =  state_2.cell;
    const firstname_2 =  state_2.name.first;
    const lastname_2 =  state_2.name.last;
    const name_2 = `${firstname_2} ${lastname_2}`
    const postcode_2 =  state_2.location.postcode;
    const city_2 =  state_2.location.city;
    const statee_2 =  state_2.location.state;
    const country_2 =  state_2.location.country;
    const address_2 = `${postcode_2} ${city_2} ${statee_2} ${country_2}`

    const picture_3 = state_3.picture.thumbnail;
    const email_3 = state_3.email;
    const cell_3 = state_3.cell;
    const firstname_3 = state_3.name.first;
    const lastname_3 = state_3.name.last;
    const name_3 = `${firstname_3} ${lastname_3}`
    const postcode_3 = state_3.location.postcode;
    const city_3 = state_3.location.city;
    const statee_3 = state_3.location.state;
    const country_3 = state_3.location.country;
    const address_3 = `${postcode_3} ${city_3} ${statee_3} ${country_3}`

    
    const [AllUserState, setAllUserState] = useState(
        [
            {
                id: uuidv4(),
                picture: picture,
                name: name,
                address: address,
                email: email,
                cell : cell
            },
    
            {
                id: uuidv4(),
                picture: picture_2,
                name: name_2,
                address: address_2,
                email: email_2,
                cell : cell_2
            },
    
            {
                id: uuidv4(),
                picture: picture_3,
                name: name_3,
                address: address_3,
                email: email_3,
                cell : cell_3
            }
        ]
    )
    return (
        <div>
            {
                AllUserState && 
                AllUserState.map(({...otherprops}) => {
                    return (
                        <AllUsersCard otherprops={otherprops}/>
                    )
                })
            }

            <Data/>
        </div>
    )
}


export default AllUsers
