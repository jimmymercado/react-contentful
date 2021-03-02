import React, {Component} from 'react';
import '../assets/css/main.css';
import Loader from '../components/Loader';
import client from './Client';
import marked from 'marked';


class Home extends Component{

  constructor(){
    super()
    this.state = {
      homeBanner: [],
      homeFeature: [],
      homeGallery: [],
      homeFAQ: []
    }
  }

  componentDidMount(){
    client.getEntries({
      content_type: 'homeBanner',
      order: 'sys.createdAt'
    }).then((entries)=>{
      this.setState({homeBanner: entries.items});
      //console.log(this.state.homeBanner);
    });


    client.getEntries({
      content_type: 'feature',
      order: 'sys.createdAt'
    }).then((entries)=>{
      this.setState({homeFeature: entries.items[0].fields});
      //console.log(this.state.homeFeature);
    });

    client.getEntries({
      content_type: 'gallery',
      order: 'sys.createdAt'
    }).then((entries)=>{
      this.setState({homeGallery: entries.items[0]});
      //console.log(this.state.homeGallery);
    });

    client.getEntries({
      content_type: 'accordion',
      order: 'sys.createdAt'
    }).then((entries)=>{
      this.setState({homeFAQ: entries.items[0]});
      //console.log(this.state.homeFAQ);
    });

  }

  setCarouselStatus(keyIndex){
    if(keyIndex === 0){
      return 'active';
    }
    return '';
  }


  getParsedMarkdown(text){
    return{
      __html:marked(text, {sanitized:true})
    }
  }

  render(){

    return(
      <div>
        {
          this.state.homeBanner.length === 0 ?
          <Loader/>
          :

          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            {
              this.state.homeBanner.map((item, index) => {
                return (
                  <div key={index} className={`carousel-item ${this.setCarouselStatus(index)}`}>
                    <img src={item.fields.homeBanner_image.fields.file.url} className="d-block w-100" alt={item.fields.homeBanner_altText}/>
                  </div>
                )
              })
            }            
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        }
        <section id="feature">
          <div className="container text-center pt-4">
            <h1>{this.state.homeFeature.feature_title}</h1>
            <p className="lead">{this.state.homeFeature.feature_description}</p>
          </div>
          <div className="container">

            {
              this.state.homeFeature.length === 0 ?
              <Loader/>
              :
              <div className="row">
              {
                this.state.homeFeature.feature_featureItems.map((item, index) => {
                  return(
                    <div key={index} className="col-md-4">
                      <div className="feature-wrap">
                        <i className={item.fields.feat1_icon}></i>
                        <h2>{item.fields.feat1_title}</h2>
                        <h3>{item.fields.feat1_decription}</h3>
                      </div>
                    </div>
                  )
                })
              }
                
              </div>
            }
            
          </div>
        </section>
        <div className="spacer"/>
        <section id="portfolio">
          <div className="container">
            <h2>Portfolio</h2>
            <p className="lead">Voluptas sed, natus eos. Commodi per voluptate vestibulum voluptas nibh. Class ante, eiusmod quidem aliqua sociis, platea eros nullam perferendis, cillum natoque maxime cras, duis voluptas soluta tincidunt magnam sodales, erat eveniet cras semper, culpa vitae accusamus quidem, litora mus! Sed cupiditate, earum vestibulum, aliquet lectus diam blanditiis. Enim harum.</p>
          </div>
          <div className="container">
            {
              this.state.homeGallery.length === 0 ?
              <Loader/>
              :
              this.state.homeGallery.fields.gallery_images.map((item, num = 0) => {
                num += 1;
                return (
                  <div key={num} className="cssbox">
                    <a id={num} href={`#${num}`}><img className="cssbox_thumb" src={item.fields.file.url} alt={num}/>
                      <span className="cssbox_full"><img src={item.fields.file.url} alt={num}/></span>
                    </a>
                    <a className="cssbox_close" href="#void"> </a>
                    <a className="cssbox_next" href={`#${num+1}`}>&gt;</a>
                  </div>
                )
              })
            }
             

          </div>
        </section>
        <div className="spacer"/>
        
        <section id="faq">        
        {
          this.state.homeFAQ.length === 0 ? 
          <Loader/>
          :          
          <div className="container">
            <h2>{this.state.homeFAQ.fields.title}</h2>
            <p className="lead" dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.homeFAQ.fields.description)}></p>
                    
            <div className="container">
              <div className="accordion" id="accordionExample">
              {
                this.state.homeFAQ.fields.accordionItems.map((item, num = 0) => {
                  num += 1;
                  return (
                    <div key={num} className="accordion-item">
                      <h2 className="accordion-header" id={`heading${num}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${num}`} aria-expanded="true" aria-controls={`collapse${num}`}>
                          {item.fields.title}
                        </button>
                      </h2>
                      <div id={`collapse${num}`} className="accordion-collapse collapse show" aria-labelledby={`heading${num}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p dangerouslySetInnerHTML={this.getParsedMarkdown(item.fields.description)}></p>
                        </div>
                      </div>
                    </div>

                  )
                })
              }
                
                
              </div>
            </div>
            <div className="spacer"/>
          </div>
        }

          
        </section>
        <div className="spacer"/>
      </div>
    );
  }
}

export default Home;