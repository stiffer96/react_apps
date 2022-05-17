import React, { useState,useContext } from 'react';
import GithubContext from './../../context/github/githubContext';

const Search = () => {
    const [text, setText] = useState('');
    const githubContext =  useContext(GithubContext);
    

    const onChange = (e) =>{
        setText(e.target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        githubContext.Searchuser(text);
        setText('');
    }
    

        return (
            <div className="container mt-3">
                     <form onSubmit={onSubmit}>
                         <input className="form-control" type="text" name="text" placeholder="... Search User" value={text} onChange={onChange}/>
                         <input className="btn btn-primary mt-3" type="submit" value="Submit" />
                     </form>
           </div>
        )
 
}

export default Search
