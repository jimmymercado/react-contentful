import React, {Component} from 'react';
import client from './Client';
import Loader from '../components/Loader';
import marked from 'marked';

class About extends Component{

  constructor(){
    super()
    this.state = {aboutText: []}
  }

  componentDidMount(){
    client.getEntries({
      'content_type': 'about'
    })
    .then((entries) => {
       this.setState({aboutText: entries.items[0]});
       //console.log(this.state.about_text);
    })
  }

  getParsedMarkdown(aboutText){
    return{
      __html:marked(aboutText, {sanitized:true})
    }
  }

  render(){

    return(
      <div>
        <div className="container pt-4">
          <h2 className="text-center">About</h2>
          {
            this.state.aboutText.length===0 ?
            <Loader/>
            :
            <div dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.aboutText.fields.about_text)}></div>
            //<p>{this.state.aboutText.fields.about_text}</p>
          }
        </div>
        
      </div>
    );
  }
}

export default About;