import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout'
import App from './components/App';
import Upload from './components/Upload'
import Login from './components/Login'
import UploadView from './components/UploadView'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const rootElement = document.getElementById('wrap');
ReactDOM.render((<Router history={browserHistory}>
					<Route path='/' component={Layout}>
						<IndexRoute component={App}/>
						<Route path="upload" component={UploadView}/>
						<Route path="login" component={Login}/>
						{/*<Route path="*" component={NoMatch}/>*/}
					</Route>
				</Router>
	), rootElement);
