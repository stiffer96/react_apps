import React, {useContext} from 'react';
import Useritem from './Useritem';
import GithubContext from './../../context/github/githubContext';

const Users =()=> {

    

    const githubContext =  useContext(GithubContext);

     const {users}=githubContext;


   

   
   
        return (
           <div className="container">
               <div className="row">
          {users.map(user=>(
                  <Useritem key={user.id} user={user}></Useritem>
          ))}   
           </div></div>
        )
    
}

export default Users
