import React, {Component} from 'react';
import client from  './Client';
import Loader from '../components/Loader';
import marked from 'marked';

class Services extends Component{

  constructor(){
    super()
    this.state = {serviceText: []}
  }

  componentDidMount(){
    client.getEntries({
      'content_type': 'services',
      'order' : 'sys.createdAt'
    })
    .then((entries) => {
       this.setState({serviceText: entries.items});
       //console.log(this.state.about_text);
    })
  }



  render(){

    return(
      <div>
        <section id="services" className="pt-4">
          <div className="container">
            <div className="text-center">
              <h2>Our Services</h2>
              <p className="lead">Hac facilis, voluptate doloribus voluptates anim! Consequat cupidatat omnis, malesuada eaque, duis, aute wisi eveniet curae lacus convallis euismod vehicula nibh nostrud exercitation euismod dolorum quia esse, lorem, porttitor, enim iusto proident! Ridiculus natoque quod aliquid! Cupidatat aptent ullamcorper magni accumsan possimus. Tempus sagittis ullamcorper! Voluptatum sunt volutpat accusantium eligendi.</p>
            </div>

            {
              this.state.serviceText.length===0 ?
              <Loader/>
              :
              <div className="row">              
                {
                this.state.serviceText.map((item, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <div className="media service-wrap">
                        <div>
                          <img className="pr-3" src={item.fields.service_icon.fields.file.url} alt='' />
                        </div>
                        <div className="media-body">
                          <h3 className="media-heading">{item.fields.service_title}</h3>
                          <p>{item.fields.service_desciption}</p>
                        </div>
                      </div>
                    </div>
                  );
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

export default Services;