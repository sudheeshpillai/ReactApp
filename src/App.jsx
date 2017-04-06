import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';
import { Header } from './Header.jsx'


export class App extends React.Component {

    render() {
        return (
            <div className='MasterPage'>
                <Header />
                {this.props.children}
            </div>
        )
    }
}



