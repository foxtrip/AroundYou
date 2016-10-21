import React from 'react';
import { Link } from 'react-router'
import { store, connector } from './Store';//REDUX

class Upload extends React.Component{
	constructor(props) {
		super(props)
    this.uploadClick=this.uploadClick.bind(this);
	}
  uploadClick(){
    this.props.getNewmarker(true);
  }
  render(){ 
    return (
      <Link to = "upload" onClick={this.uploadClick}>
      <div>upload</div>
      </Link >
    );
  };
};

export default connector(Upload);