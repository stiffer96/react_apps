import React,{Fragment, useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/include/Header';
import Footer from './components/include/Footer';
import About from './components/layout/About';
import axios from 'axios';
import Search from './components/user/Search';
import Users from './components/user/Users';
import SingleUser from './components/user/SingleUser';
import GithubState from './context/github/GithubState';

const App =()=> {
   const [users,setUsers] = useState([]);
   const [user,setUser] = useState({});  

   
  return (
    <GithubState>
    <Router>
    <div className="App">
      <Header></Header>
    <Switch>
      <Route exact path="/" render={props=>(
        <Fragment>
           <Search></Search>
           <Users ></Users>
        </Fragment>
      )}/>

      <Route exact path="/about" render={props=>(
        <Fragment>
          <About></About>
        </Fragment>
      )}/>
      <Route exact path="/user/:login" render={props=>(
        <Fragment>
        <SingleUser {...props} ></SingleUser>
      </Fragment>
      )}/>

      </Switch>
         
      <Footer></Footer>
      
    </div>
     </Router>
     </GithubState>
  );
     
}

export default App;
