import React from 'react';
import $ from 'jquery';
import Header from './Header';
import Map from './Map';
import Upload from './Upload';
import Photo from './Photo';
import Footer from './Footer';
import '!style!css!./../styles/style.css';//css module 찾아보기
//import MapData from './../../data/MapData';
import Login from './Login';
import UploadView from './UploadView';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mapList : [] //default 
    };
    this.loadDataFromServer=this.loadDataFromServer.bind(this);
  };
  loadDataFromServer(){
    $.ajax({  //ajax call 바로 해서 받은 파일을 this.mapList로 
      type:'GET',
      url:'/data',
      dataType:'jsonp',//??
      success:((data)=> {
         this.setState({mapList: data});
       }).bind(this),      
      error: (err) => {
        console.log('ajax error');
      }
    });
  };
  componentDidMount() {  
    this.loadDataFromServer();
  };
  mapClick(){ //아직 안씀
    console.log("mpp clicked");
  };
  loginRender(e){ //아직 안씀
    console.log('click?');
  };
  uploadPhoto(){  //아직 안씀
    console.log('upload!');
  };
  render(){ 
    return (
      <div>
        <div id="header" >
          <div id = "title">
            <div id="outer">
              <div id="inner">
                <Header />
              </div>
            </div>
          </div>
          <div id="login">
            <div id="outer">
              <div id="inner">
               <Login onClick = {this.loginRender}/>
              </div>
            </div>
          </div>
        </div>  
        <div id="map">
          <div id="outer">
            <div id="inner">
              <Map marker={this.state.mapList} onClick={this.mapClick}/>
            </div>
          </div>
        </div >
        <div id="photos">
          <div id="upload">
            <div id="outer">
              <div id="inner" onClick = {this.uploadPhoto}>
                  <Upload />
              </div>
            </div>
          </div>
          <div id="photo">
            <div id="outer">
              <div id="inner">
                <Photo photoSource={this.state.mapList} />
              </div>
            </div>
          </div>
        </div>
        <div id="compare"></div>
        <div id="footer">
          <div id="outer">
            <div id="inner">
                <Footer title={this.props.footerTitle} />
            </div>
          </div>
        </div>
      </div>
    )
  };

};

export default App;
