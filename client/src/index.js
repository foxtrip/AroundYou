import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout'
import App from './components/App';
import UploadPage from './components/UploadPage'//변경
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const rootElement = document.getElementById('wrap');
ReactDOM.render((<Router history={browserHistory}>
					<Route path='/' component={Layout}>
						<IndexRoute component={App}/>
						<Route path="upload" component={UploadPage}/>
						{/*<Route path="*" component={NoMatch}/>*/}
					</Route>
				</Router>
	), rootElement);
//<Route path="login" component={LoginPage}/> 
