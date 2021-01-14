import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import UsersList from '../../components/Users-list/UsersList'



const FirstProfileData = ({firstUser, setOpenProfile}) => {
    
    const userData_1 =  firstUser();
    console.log(userData_1.results[0]);

    const handleBackToHome = () => {
        setOpenProfile(false)
    }

    const picture = userData_1.results[0].picture.large;
    const title = userData_1.results[0].name.title;
    const firstname = userData_1.results[0].name.first;
    const lastname = userData_1.results[0].name.last;
    
    const email = userData_1.results[0].email;
    const age = userData_1.results[0].registered.age
    const joined = userData_1.results[0].registered.date;
   
    const name = `${title} ${firstname} ${lastname} ${age}`;
    const postcode = userData_1.results[0].location.postcode;
    const city = userData_1.results[0].location.city;
    const state = userData_1.results[0].location.state;
    const country = userData_1.results[0].location.country;
    const address = `${postcode} ${city} ${state} ${country}`
    const cell = userData_1.results[0].cell;

    console.log(name, address)
    const [firstProfile, setFirstProfile] = useState([
        {
            id : uuidv4(),
            picture : picture,
            name : name,
            email : email,
            joined: joined,
            address: address,
            cell : cell,
            cell : cell,
            backToHome: handleBackToHome,
        }
    ]);

    
    return (
      
        <div>
            {
                firstProfile && 
                firstProfile.map(({...otherprops}) => {
                    return (
                        <UsersList otherprops={otherprops}/>
                    )
                })
            }
        </div>
                
   
    )
}

export default FirstProfileData
