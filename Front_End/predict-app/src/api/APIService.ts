import React from 'react';
import axios from 'axios';

const createApi= () =>{
    const api = axios.create();
    
    const postRequisition = async(objValues: any) =>{
        const endpoint = 'https://linearregressionfastapi.herokuapp.com/';
        return await api.post(endpoint+'allocate-value/', objValues);
    }

    return{
        postRequisition,
    };
};

export default {
    createApi,
};

