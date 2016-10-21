import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'
import App from './components/App'
import UploadView from './components/UploadView'
import Photo from './components/Photo'
import { store, connector } from './components/Store'
import { Provider } from 'react-redux'//REDUX

ReactDOM.render((
		<Provider store = {store}>
			<Router history={browserHistory}>
					<Route component={Layout}>
					  <Route path='/' component={App}>
					    <Route path="photo" component={Photo}/>
							<Route path="upload" component={UploadView}/>
						{/*<Route path="*" component={NoMatch}/>*/}
					  </Route>
					</Route>
				</Router>
			</Provider>
	), document.getElementById('wrap'));
