import React, { Suspense, useState } from 'react';
import { FaToggleOn } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { ImCloudDownload } from "react-icons/im";

import Input from '../../components/input/Input'
import './SecondContents.css'
import AllUsers from '../../components/All-UsersCard/AllUsersCard'
import UsersList from '../../components/Users-list/UsersList';

import { Route, Switch } from 'react-router-dom';
import FirstProfileData from '../../Navigation/pages/FirstProfileData';

import { useAsyncResource } from 'use-async-resource';
import useErrorBoundary from "use-error-boundary"

import SecondProfilePageData from '../../Navigation/pages/SecondProfilePageData';
import ThirdProfilePageData from '../../Navigation/pages/ThirdProfilePageData';


const API_URL = 'https://randomuser.me/api/';
const randData = () => fetch(API_URL).then(res => res.json());
const secondRandData = () => fetch(API_URL).then(res => res.json());
const thirdRandData = () => fetch(API_URL).then(res => res.json());



const SecondContents = () => {
    const [firstUser, setFirstUser] = useAsyncResource(randData, []);
    const [secondUser, setsecondUser] = useAsyncResource(secondRandData, []);
    const [thirdUser, setthirdUser] = useAsyncResource(thirdRandData, []);
    const {ErrorBoundary} = useErrorBoundary();

    const [openProfile, setOpenProfile] = useState(false);

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

               {
                    !openProfile ?  
                    <ErrorBoundary>
                        <Suspense fallback='All Users is Loading'>
                            <AllUsers firstUser = {firstUser} secondUser = {secondUser} thirdUser = {thirdUser} setOpenProfile= {setOpenProfile}/>
                        </Suspense>
                    </ErrorBoundary>

                    :

                    <Switch>
                        <ErrorBoundary>
                            <Suspense fallback='UserList'>
                                <Route path='/firstProfileData' component={() => <FirstProfileData firstUser = {firstUser} setOpenProfile= {setOpenProfile}/>} />
                                <Route path='/secondProfilePageData'  component={() => <SecondProfilePageData secondUser = {secondUser} setOpenProfile= {setOpenProfile}/> } /> 
                                <Route path='/thirdProfilePageData'  component={() => <ThirdProfilePageData thirdUser = {thirdUser} setOpenProfile= {setOpenProfile}/> } /> 
                            </Suspense>
                        </ErrorBoundary>
                    </Switch>
               }

               

                
                {/* <UsersList /> */}
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
