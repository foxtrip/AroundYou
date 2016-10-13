import React from 'react';

class UploadView extends React.Component{
	constructor(props) {
		super(props)
		this.state = {};
		this.getText = this.getText.bind(this);
	}
	getText(event){
		this.setState({author: event.target.value});
	}

  render(){
    return (
      <div>
        <h1 style={{color: "green"}}>UploadView</h1>
        <form action="" onSubmit={this.getText}>
        	<input name="photoTags" type="text" />
        	<input name="tagsSubmit" type="submit"/>
        </form>
      </div>
    )
  };

};

export default UploadView;
