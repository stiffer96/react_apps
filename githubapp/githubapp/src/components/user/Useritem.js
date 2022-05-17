import React from 'react';
import {Link} from 'react-router-dom';

const Useritem = ({user})=> {
    
    
        const { login,avatar_url} = user;
        return (
            <div className="cart text-center col-md-2 mt-5 mb-2">
                 <h4>{login.toUpperCase()}</h4>
                <img src={avatar_url} alt="" className="rounded-circle mt-2" style={{width:'100px'}} />
                <div style={{clear:'both'}}></div>
                <Link className="btn btn-primary mt-3" to={`/user/${login}`}>View More</Link>
            </div>
        )
   
}

export default Useritem
