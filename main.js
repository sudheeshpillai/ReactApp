import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './src/App.jsx';
import {About} from './About.jsx';
import {Contact} from './Contact.jsx';
import { Router, Route, Link, browserHistory, IndexRoute,hashHistory } from 'react-router';
import {IndexPage} from './src/Index.jsx';
import {Features} from './src/Features.jsx';
import {Organization} from './src/Organization.jsx';

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {IndexPage} />
         <Route path = "/index" component = {IndexPage} />
         <Route path = "/feature" component = {Features} />
         <Route path = "/organization" component = {Organization} />
         <Route path = "/contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('app'));