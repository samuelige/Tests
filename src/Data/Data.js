import axios from 'axios'
import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import LoadRandomDataAction  from '../Redux/Actions/Action-Creator/loadRandomDataAction';
import  LoadSecondRandomDataAction from '../Redux/Actions/Action-Creator/LoadSecondRandomDataAction';
import  LoadThirdRandomDataAction from '../Redux/Actions/Action-Creator/LoadThirdRandomDataAction'

const Data = () => {
    // const state =  useSelector(state => state.randomData.randomData)
    const dispatch = useDispatch();
    
    const API_URL = 'https://randomuser.me/api/';
    
    useEffect(() => {
        loadData()
        // randomUser()
    }, [])

    console.log(LoadSecondRandomDataAction)

    const loadData = async () => {
        try {
            // const randData = await axios.get(API_URL);
            // const secondRandData = await axios.get(API_URL);
            // const thirdRandData = await axios.get(API_URL);

            // console.log(randData.data.results[0]);
            // dispatch(LoadRandomDataAction(randData.data.results[0]));
            // dispatch(LoadSecondRandomDataAction(secondRandData.data.results[0]));
            // dispatch(LoadThirdRandomDataAction(thirdRandData.data.results[0]));
            const [randData, secondRandData, thirdRandData] = await Promise.all([
                axios.get(API_URL),
                axios.get(API_URL),
                axios.get(API_URL)
            ]);

            

            dispatch(LoadRandomDataAction(randData.data.results[0]));
            dispatch(LoadSecondRandomDataAction(secondRandData.data.results[0]));
            dispatch(LoadThirdRandomDataAction(thirdRandData.data.results[0]));
            console.log(secondRandData.data.results[0])
            console.log(thirdRandData.data.results[0])
        }

        catch(error) {
            console.error(error);
        }

        
    }
    // const randomUser = async () =>{
    //     const randomResult = await fetch (API_URL)
    //     const result = await randomResult.json();
    //     console.log(result.results[0]);
    //     // return (result.results[0]);
    //     dispatch(LoadRandomDataAction(result.results[0]));
    // }
    return (
        <div>
            
        </div>
    )
}

export default Data
