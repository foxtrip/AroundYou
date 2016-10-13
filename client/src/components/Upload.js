import React from 'react';

class Upload extends React.Component{
	constructor(props) {
		super(props)
		this.state = {value: 'Hello!'};
		this.getText = this.getText.bind(this);
	}
	getText(event){
		this.setState({value: event.target.value});
	}

  render(){
    return (
      <div>
        <h1 style={{color: "green"}}>Upload</h1>
        <form>
        	<input name="photoTags" type="text" onChange={this.getText} />
        	<input name="tagsSubmit" type="submit"/>
        </form>
      </div>
    )
  };

};

export default Upload;
