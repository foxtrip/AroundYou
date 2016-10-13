import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class Upload extends React.Component{
	constructor(props) {
		super(props)
		this.state = {value: 'Hello!'};
		this.getText = this.getText.bind(this);
	}

  render(){
    return (
      <div>
        <h1 style={{color: "green"}}>
        	<Link to="upload">Upload</Link>
        </h1>
        {this.props.children}
      </div>
    )
  };

};

export default Upload;
