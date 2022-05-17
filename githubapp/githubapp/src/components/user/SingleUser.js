import React, { useEffect, useContext } from 'react';
import GithubContext from './../../context/github/githubContext';

const SingleUser = ({match})=> {
    
    const githubContext =  useContext(GithubContext);
    const { getUser, user } = githubContext;

    useEffect(()=>{
        getUser(match.params.login);
    },[])
   
   
        const{name,avatar_url,location,bio,public_repos,public_gists,followers,following,created_at,updated_at}= user;

        return (
            <div className="container">
                <div className="card mt-4 mb-3 col-md-4">
                <img className="card-img-top" src={avatar_url} alt='' style={{width:'100%'}}/>
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text">{bio}</p>
      <p className="card-text">{location}</p>

      <span className="badge badge-primary ml-2">Public Repos : {public_repos}</span>
  <span className="badge badge-secondary ml-2">Public Gists: {public_gists}</span>
  <span className="badge badge-success ml-2">Followers : {followers}</span>
  <span className="badge badge-danger ml-2">Following :{following}</span>
  <span className="badge badge-info ml-2">Profile Created Date: {created_at}</span>
  <span className="badge badge-dark ml-2">Last Profile Update Date :{updated_at}</span>
     
    </div>
    </div>
            </div>
        )
  
}

export default SingleUser
