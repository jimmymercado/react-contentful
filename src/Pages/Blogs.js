import React, {Component} from 'react';
import img1 from '../assets/images/banner-codes.jpg';
import img2 from '../assets/images/banner-laptop.jpg';
import client from './Client';
import imgLoader from '../assets/images/black_loader.gif';
import {Link} from 'react-router-dom';

class Blogs extends Component{
  constructor(){
    super()
    this.state = {blogItems: []}
  }

  componentDidMount(){
    client.getEntries({
      'content_type': 'blogs',
      'order': 'sys.createdAt'
    }).then((entries)=>{
      this.setState({blogItems: entries.items})
    });
  }

  render(){

    return(
      <div>
        <section id="blog" className="pt-4">
          <div className="container">
            <div className="text-center">
              <h2>Blogs</h2>
              <p className="lead">
                Aut quas laboriosam alias sed ultrices placerat praesentium? Quam, augue anim officiis at tempore asperiores, interdum arcu porro! Luctus impedit, maecenas hymenaeos. Posuere tempore, class repudiandae class! Sapiente quisquam pretium venenatis nobis ratione, nunc pulvinar, exercitationem consequat incididunt hymenaeos cupiditate. Iste blandit nulla occaecati non dictumst dolore quod! Interdum quos.
              </p>
            </div>

            {
              this.state.blogItems.length === 0 ?
              <div className="loadergif"><img src={imgLoader} alt=""/></div>
              :              
              <div className="row">
              {
                this.state.blogItems.map((item, index) => {
                  return (
                  <div key={index} className="col-md-6 blog-content">
                    <img src={item.fields.blogs_imageTeaser.fields.file.url} alt=""/>
                    <h3><Link to={`../blogs/${item.fields.blogs_slug}`}>{item.fields.blogs_title}</Link></h3>
                    <p>
                      {item.fields.blogs_description}
                    </p>
                    <button className="btn btn-primary">Read more...</button>
                  </div>
                  )
                })
              }
              </div>
              


            }

            
          </div>
        </section>
      </div>
    );
  }
}

export default Blogs;