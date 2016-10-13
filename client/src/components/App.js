import React from 'react';
import Header from './Header';
import Map from './Map';
import Upload from './Upload';
import Photo from './Photo';
import Footer from './Footer';
import '!style!css!./../styles/style.css';
import MapData from './../../data/MapData';
import Login from './Login';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mapList : window.mapMarker
    };
  };
  mapClick(){
    console.log('map Clicked!!');
  }
  uploadPhoto(){
    console.log('upload!');//업로드 클릭시  1. 지도가 클릭할수 있게하고 2. 클릭시 좌표저장
  }
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
               <Login />
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
