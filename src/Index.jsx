import React from 'react';
import ReactDOM from 'react-dom';
import { Link, LoginLink } from 'react-router';

export class IndexPage extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="bg-color">
                    <div className="container">
                        <div className="row">
                            <div className="banner-text text-center">
                                <div className="text-border">
                                    <h2 className="text-dec">Peer to peer energy</h2>
                                </div>
                                <div className="intro-para text-center quote">
                                    <p className="big-text">Blockchain and the Rise of Peer-to-Peer Power Markets.</p>
                                    <p className="small-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium enim repellat sapiente quos architecto<br />Laudantium enim repellat sapiente quos architecto</p>
                                    <a href="#." className="btn">GET A QUOTE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}