import React from 'react';
import { Link, LoginLink } from 'react-router';

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Energ<span>on</span></a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/feature">Features</a></li>
                            <li><a href="/organization">Organisations</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#" data-target="#login" data-toggle="modal">Sign in</a></li>
                            <li className="btn-trial"><a href="#footer">Free Trial</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}