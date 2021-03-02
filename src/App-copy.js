import React, {Component} from 'react';
import List from './components/List';
import Title from './Practice/Title';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';


class App extends Component{
  constructor(){
    super();
    this.state ={
      names:  []
    }
    this.removeName = this.removeName.bind(this);
  }

  removeName(nameToRemove){

    console.log(nameToRemove);
    this.setState((state,) => ({
      names: state.names.filter(name => name !== nameToRemove)
    }));
  }

  componentDidMount(){
    const data = simulateFetch();
    this.setState({
      names: data
    })
  }

  render(){
    return(
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Blogs/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}


function simulateFetch(){

  return ['john', 'paul', 'george', 'ringo'];
}

export default App;