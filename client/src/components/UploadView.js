import React from 'react';
import $ from 'jquery';
//1. Upload 전체 클릭하면 photo.js에서 UploadView.js 로 내용물 변경.  1-2. 포인터 추가....
//2. 포인터를 적당한 위치에 놓으면 UploadView.js 칸에 입력값 뜨고,  
//3. 나머지칸 입력한 뒤 엔터 누르면 db 에 입력값 저장후 원래 photo.js 뜬다. 
class UploadView extends React.Component{
	constructor(props) {
		super(props)
		this.state = {author: 'jsu'};
		this.loadMessage = this.loadMessage.bind(this);
	}
  // componentwillreceiveprops(){ // test 용 console.log // props가 변화될 때마다 실행 
  //   console.log('uploadView props', this.props) // Map.js에서 정상적으로 newLng와 newLat가 넘어옴
  //   console.log('state', this.state)
  // }
  // componentDidMount(){ // test용 console.log
  //   this.setState({hereLng: this.props.newLng, hereLat: this.props.newLat}); 
  //   console.log(this.state.newLng, this.state.newLat); // Map.js에서 받은 newLng와 newLat가 출력되지 않음. componentwillreceiveprops와 왜 다르게 출력되는지 모르겠음
  // }
  // 아래의 form 값을 전송하기 위한 test function. // Map.js에서 받은 데이터로 setState가 되면 form에 입력한 부분과 함께 routes로 data를 전송하려고 함.
  loadMessage(sth) { // 현재 form에 입력한 data는 routes에서 req.body.name으로 받을 수 있으나, this.state 전송에 실패.
    var herex = this.props.newLng;
    $.ajax({
      url:'/upload',
      dataType:'json',
      type: 'POST',
      data: herex, 
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
          <h4 style={{color: "white"}}> tag </h4>
          <input name="tag" type="text" />
          <input name="tagsSubmit" type="submit" onSubmit={this.loadMessage} />
        </form>
      </div>
    )
  };

};

export default UploadView;

