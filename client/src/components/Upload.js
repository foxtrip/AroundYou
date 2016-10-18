import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class Upload extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
      memo: "upload"
    };
	};
//1. Upload 전체 클릭하면 photo.js에서 UploadView.js 로 내용물 변경.  1-2. 포인터 추가....
//2. 포인터를 적당한 위치에 놓으면 UploadView.js 칸에 입력값 뜨고,  
//3. 나머지칸 입력한 뒤 엔터 누르면 db 에 입력값 저장후 원래 photo.js 뜬다. 
  render(){ 
    return (
      <Link to = "upload">
      <div>{this.state.memo}</div>
      </Link >
    );
  };
};

export default Upload;