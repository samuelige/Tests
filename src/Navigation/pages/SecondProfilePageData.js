import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

// import UsersList from '../../components/Users-list/UsersList';

const SecondProfilePageData = () => {
    

    const firstProfileState = useSelector(firstState => firstState.randomData.randomData);
    console.log(firstProfileState)

    // const picture = firstProfileState.picture.large;
    // const title = firstProfileState.name.title;
    // const firstname = firstProfileState.name.first;
    // const lastname = firstProfileState.name.last;
    
    // const email = firstProfileState.email;
    // const age = firstProfileState.registered.age
    // const joined = firstProfileState.registered.date;
   
    // const name = `${title} ${firstname} ${lastname} ${age}`;
    // const postcode = firstProfileState.location.postcode;
    // const city = firstProfileState.location.city;
    // const state = firstProfileState.location.state;
    // const country = firstProfileState.location.country;
    // const address = `${postcode} ${city} ${state} ${country}`
    // const cell = firstProfileState.cell;

    // const [firstProfile, setFirstProfile] = useState([
    //     {
    //         id : uuidv4(),
    //         profile : picture,
    //         name : name,
    //         email : email,
    //         joined: joined,
    //         cell : cell,
    //         cell : cell,
    //     }
    // ])

    
    return (
      
        <div>
            {/* {
            firstProfile && 
            firstProfile.map(({otherProps}) => {
                return (
                    <UsersList otherProps={otherProps}/>
                )
            })
        } */}
        </div>
                
   
    )
}

export default SecondProfilePageData
