import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
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
                        <FaArrowRight className='arrow' onClick={otherprops.click}/>
                    </button>
                </div>
                
            </div>
        </div>
    )
}


const AllUsers = ({firstUser, secondUser, thirdUser, setOpenProfile}) => {
    
    const userData_1 =  firstUser();
    
    const userData_2 =  secondUser();
    const userData_3 =  thirdUser()
    console.log(userData_3.results[0]);
    
    const picture = userData_1.results[0].picture.thumbnail;
    const email = userData_1.results[0].email;
    const cell = userData_1.results[0].cell;
    const firstname = userData_1.results[0].name.first;
    const lastname = userData_1.results[0].name.last;
    const name = `${firstname} ${lastname}`
    const postcode = userData_1.results[0].location.postcode;
    const city = userData_1.results[0].location.city;
    const statee = userData_1.results[0].location.state;
    const country = userData_1.results[0].location.country;
    const address = `${postcode} ${city} ${statee} ${country}`

    const picture_2 =  userData_2.results[0].picture.thumbnail;
    const email_2 =  userData_2.results[0].email;
    const cell_2 =  userData_2.results[0].cell;
    const firstname_2 =  userData_2.results[0].name.first;
    const lastname_2 =  userData_2.results[0].name.last;
    const name_2 = `${firstname_2} ${lastname_2}`
    const postcode_2 =  userData_2.results[0].location.postcode;
    const city_2 =  userData_2.results[0].location.city;
    const statee_2 =  userData_2.results[0].location.state;
    const country_2 =  userData_2.results[0].location.country;
    const address_2 = `${postcode_2} ${city_2} ${statee_2} ${country_2}`

    console.log(userData_2.results[0]);

    const picture_3 = userData_3.results[0].picture.thumbnail;
    const email_3 = userData_3.results[0].email;
    const cell_3 = userData_3.results[0].cell;
    const firstname_3 = userData_3.results[0].name.first;
    const lastname_3 = userData_3.results[0].name.last;
    const name_3 = `${firstname_3} ${lastname_3}`
    const postcode_3 = userData_3.results[0].location.postcode;
    const city_3 = userData_3.results[0].location.city;
    const statee_3 = userData_3.results[0].location.state;
    const country_3 = userData_3.results[0].location.country;
    const address_3 = `${postcode_3} ${city_3} ${statee_3} ${country_3}`

    console.log(userData_3.results[0]);

    // router
    const history = useHistory();
    const firstProfileData = () =>{
        setOpenProfile(true)
        history.push('/firstProfileData')
    } ;
    const secondProfilePageData = () => {
        setOpenProfile(true)
        history.push('/secondProfilePageData')
    };
    const thirdProfilePageData = () => {
        setOpenProfile(true)
        history.push('/thirdProfilePageData')
    };

    const [AllUserState, setAllUserState] = useState(
        [
            {
                id: uuidv4(),
                picture: picture,
                name: name,
                address: address,
                email: email,
                cell : cell,
                click: firstProfileData
            },
    
            {
                id: uuidv4(),
                picture: picture_2,
                name: name_2,
                address: address_2,
                email: email_2,
                cell : cell_2,
                click: secondProfilePageData,
            },
    
            {
                id: uuidv4(),
                picture: picture_3,
                name: name_3,
                address: address_3,
                email: email_3,
                cell : cell_3,
                click: thirdProfilePageData,
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
