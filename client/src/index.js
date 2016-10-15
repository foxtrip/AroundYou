import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout'
import App from './components/App';
<<<<<<< c849efdf0afa580c9ab80934ed7d4c654935bbd5
import UploadView from './components/UploadView'
=======
import UploadPage from './components/UploadPage'//변경
>>>>>>> google login
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

const rootElement = document.getElementById('wrap');
ReactDOM.render((<Router history={browserHistory}>
					<Route path='/' component={Layout}>
						<IndexRoute component={App}/>
<<<<<<< c849efdf0afa580c9ab80934ed7d4c654935bbd5
						<Route path="upload" component={UploadView}/>
=======
						<Route path="upload" component={UploadPage}/>
>>>>>>> google login
						{/*<Route path="*" component={NoMatch}/>*/}
					</Route>
				</Router>
	), rootElement);
//<Route path="login" component={LoginPage}/> 
