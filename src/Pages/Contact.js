import React, {Component} from 'react';

class Contact extends Component{

  render(){

    return(
      <div>
        <section id="section" className="pt-4">
          <div className="container">
            <div className="text-center">
              <h2>Drop your message</h2>
              <p className="lead">Nisl reiciendis penatibus repellendus! Illum exercitation porro eius, ex, tempus pariatur magnis feugiat vel praesentium a labore labore doloribus euismod lectus. Platea odio voluptas, assumenda nisl penatibus penatibus possimus .</p>
            </div>
            <div className="contact-form">
              <iframe title="Contact Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdqQ9r3qH54QN3KrPyQv8kR1mSvXXgAHHezXlokmeu3LkR7MQ/viewform?embedded=true" width="640" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;