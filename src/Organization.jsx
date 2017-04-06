import React from 'react';
import ReactDOM from 'react-dom';

export class Organization extends React.Component {
    render() {
        return (
            <section id="organisations" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <div className="orga-stru">
                                    <h3>5%</h3>
                                    <p>Banks</p>
                                    <i className="fa fa-male"></i>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <div className="orga-stru">
                                    <h3>1%</h3>
                                    <p>Energy</p>
                                    <i className="fa fa-male"></i>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <div className="orga-stru">
                                    <h3>5%</h3>
                                    <p>Others</p>
                                    <i className="fa fa-male"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-info">
                                <hgroup>
                                    <h3 className="det-txt">Is Industry ready for change?</h3>
                                    <h4 className="sm-txt">(Block chain enabled distributed ledger)</h4>
                                </hgroup>
                                <p className="det-p">Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}