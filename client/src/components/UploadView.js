import React from 'react';
import $ from 'jquery';

class UploadView extends React.Component{
	constructor(props) {
		super(props)
		this.state = {};
		this.getText = this.getText.bind(this);
	}
	getText(event){
		this.setState({author: event.target.value});
    $.ajax({  //ajax call 바로 해서 받은 파일을 this.mapList로 
      type:'POST',
      url:'mongodb://localhost/choco',//???
      dataType:'jsonp',//??
      success: function(data){
        console.log('ajax get success? :',data);
        // this.setState({author: event.target.value});
      }.bind(this),
      error: function(err){
        console.log('error');
      }
    });
	}

  render(){
    return (
      <div>
        <h1 style={{color: "green"}}>UploadView</h1>
        <form action="" onSubmit={this.getText} method="POST">
        	<input name="photoTags" type="text" />
        	<input name="tagsSubmit" type="submit"/>
        </form>
      </div>
    )
  };

};

export default UploadView;
