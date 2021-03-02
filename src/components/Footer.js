import React, {Component} from 'react';
import '../assets/css/Footer.css';

class Footer extends Component{
  render(){

    return(
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;