import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
  render(){

    return(
      <div>
        
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">          
            <div className="container container-fluid">
              <a className="navbar-brand" href="/">Logo</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/blogs">Blogs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
        </nav>        
      </div>
    );
  }
}

export default Navbar;