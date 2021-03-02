import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import client from './Client';
import marked from 'marked';
import Loader from '../components/Loader';

class SingleArticle extends Component {
  constructor(){
    super()
    this.state={article:[]}
  }

  componentDidMount(){
    const slug = this.props.match.params.slug;

    if(slug){
      client.getEntries({
        content_type: 'blogs',
        'fields.blogs_slug': slug
      }).then((entries) => {        
        this.setState({article: entries.items[0]})
        console.log(`SingleArticle = ${this.state.article}`);
      })
    }
  }

  getParseMarkdown(blog_description){
    return {
      __html:marked(blog_description, {sanitized:true})
    }
  }

  redirectToTarget = () => {
    this.props.history.push('/blogs');
  }

  render(){

    return(
      <div className="container">
      {
        this.state.article.length===0?
        <Loader/>
        :
        
        <div className="row">
          <div className="col-md-12 pt-4">
            <div> 
              <h2 className="text-center">{this.state.article.fields.blogs_title}</h2>
              <img className="img-fluid" src={this.state.article.fields.blogs_imageTeaser.fields.file.url} alt=""/>
              <p dangerouslySetInnerHTML={this.getParseMarkdown(this.state.article.fields.blogs_description)}></p>
              <button><Link to="#" onClick={this.redirectToTarget}>Back</Link></button>
            </div>
          </div>
        </div>
        
      }
      <div className="spacer"/>
      </div>
      
    )
  }
}

export default SingleArticle;