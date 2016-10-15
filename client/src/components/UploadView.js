import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class UploadView extends React.Component{
	constructor(props) {
		super(props)
		this.state = {author: 'jsu'};
		this.loadMessage = this.loadMessage.bind(this);
	}
	// getText(event){
	// 	this.setState({author: event.target.value});
 //    $.ajax({  //ajax call 바로 해서 받은 파일을 this.mapList로 
 //      type:'GET',
 //      url:'mongodb://localhost/choco',//???
 //      dataType:'jsonp',//??
 //      success: function(data){
 //        console.log('ajax get success? :',data);
 //        // this.setState({author: event.target.value});
 //      }.bind(this),
 //      error: function(err){
 //        console.log('error');
 //      }
 //    });
	// }
  componentDidMount(){
    // this.loadMessage();
  }

  loadMessage(sth) {
    console.log('fesd')
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

    // axios.post('/upload', {
    //   user:'joo',
    //   message:'hi'
    // })
    // .then( response => {console.log(response)})
    // .catch( response => {console.log(response)})
  }

  render(){
    return (
      <div>
        <h1 style={{color: "green"}}>UploadView</h1>
        <form action="" method="POST">
          <input name="photoTags" type="text" />
          <input name="tagsSubmit" type="submit" onSubmit={this.loadMessage} />
        </form>
      </div>
    )
  };

};

export default UploadView;
