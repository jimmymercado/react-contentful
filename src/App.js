import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import SingleArticle from './Pages/SingleArticle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './assets/css/cssbox.css';


class App extends Component{
  constructor(){
    super();
    
  }


  render(){
    return(
      <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:slug" component={SingleArticle} />
        <Route exact path="/contact" component={Contact} />
        <Footer/>
      </div>
      </Router>
    )
  }
}



export default App;