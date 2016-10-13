import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout'
import App from './components/App';
import UploadPage from './components/UploadPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const rootElement = document.getElementById('wrap');
ReactDOM.render((<Router history={browserHistory}>
					<Route path='/' component={Layout}>
						<IndexRoute component={App}/>
						<Route path="upload" component={UploadPage}/>
						<Route path="login" component={LoginPage}/>
						<Route path="signup" component={SignupPage}/>
						{/*<Route path="*" component={NoMatch}/>*/}
					</Route>
				</Router>
	), rootElement);
