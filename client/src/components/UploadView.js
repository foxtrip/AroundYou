import React from 'react';
import $ from 'jquery';

class UploadView extends React.Component{
	constructor(props) {
		super(props)
		this.state = {author: 'jsu'};
		this.loadMessage = this.loadMessage.bind(this);
	}

  componentWillMount(){
    console.log('uploadView props', this.props)
    console.log('state', this.state)
  }

  loadMessage(sth) {
    $.ajax({
      url:'/upload',
      dataType:'json',
      type: 'POST',
      data: sth,
      contentType: 'application/json',
      success: function(data) {
        console.log('sth', sth)
        console.log('data', data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  }

  render(){
    return (
      <div>
        <h1 style={{color: "green"}}>UploadView</h1>
        <form action="" method="POST">
          <h4 style={{color: "white"}}> lat </h4>
          <input name="lat" type="number" />
          <h4 style={{color: "white"}}> lng </h4>
          <input name="lng" type="number" />
          <h4 style={{color: "white"}}> userid </h4>
          <input name="userid" type="text" />
          <h4 style={{color: "white"}}> tag </h4>
          <input name="tag" type="text" />
          <input name="tagsSubmit" type="submit" onSubmit={this.loadMessage} />
        </form>
      </div>
    )
  };

};

export default UploadView;

