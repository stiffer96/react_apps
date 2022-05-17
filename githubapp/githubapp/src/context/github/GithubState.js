import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {SEARCH_USERS, GET_USER,ALL_USERS} from './../Type';

const GithubState = props =>{
    const initialState = {
        users:[],
        user:{}
    }

     const [state, dispatch] = useReducer(GithubReducer, initialState);

     //Search User

     const Searchuser = async text =>{
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`); 
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })     
      }

     //Get All User
     const AllUser = async () =>{
        const res = await axios.get('https://api.github.com/users');        
        dispatch({
            type:ALL_USERS,
            payload:res.data
        })     
      }

      //Get Single User
      const getUser = async (username) =>{
        const res = await axios.get(`https://api.github.com/users/${username}`);
        dispatch({
            type:GET_USER,
            payload:res.data
        })
      }

    


     return <GithubContext.Provider
        value={{
            users:state.users,
            user:state.user,
            Searchuser,
            AllUser,
            getUser
        }}
     >
     {props.children}

     </GithubContext.Provider>
}


export default GithubState