import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="container">
                <Link className="navbar-brand" to='/'>GitHub App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">About Us</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/">Search User</Link>
      </li>    
    </ul>
  </div>  
  </div>
</nav>
        )
    }
}

export default Header
