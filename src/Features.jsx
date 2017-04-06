import React from 'react';
import ReactDOM from 'react-dom';

export class Features extends React.Component {
    render(){
        return(
            <section id ="feature" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="header-section text-center">
            <h2>Features</h2>
            <p>P2P Networking and Distributed Energy Resources Management.</p>
            <hr className="bottom-line" />
          </div>
          <div className="feature-info">
            <div className="fea">
              <div className="col-md-4">
                <div className="heading pull-right">
                  <h4>Meter Registration Platform</h4>
                  <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
                </div>
                <div className="fea-img pull-left">
                  <i className="fa fa-tachometer"></i>
                </div>
              </div>
            </div>
            <div className="fea">
              <div className="col-md-4">
                <div className="heading pull-right">
                  <h4>Flexible Trading Platform</h4>
                  <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
                </div>
                <div className="fea-img pull-left">
                  <i className="fa fa-drupal"></i>
                </div>
              </div>
            </div>
            <div className="fea">
              <div className="col-md-4">
                <div className="heading pull-right">
                  <h4>Smart Meter</h4>
                  <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
                </div>
                <div className="fea-img pull-left">
                  <i className="fa fa-thermometer-full"></i>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
        );
    }
}