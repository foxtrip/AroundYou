import React from 'react';
import $ from 'jquery';
import Header from './Header';
import Map from './Map';
import Upload from './Upload';
import Footer from './Footer';
import '!style!css!./../styles/style.css';//css module 찾아보기
import Login from './Login';
import { store, connector } from './Store';//REDUX

class App extends React.Component{
  constructor(props){
    super(props);
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  };
  loadDataFromServer(){
    $.ajax({  //ajax call 바로 해서 받은 파일을 this.mapList로 
      type:'GET',
      url:'/data',
      dataType:'jsonp',//??
      success:((data)=> {
         console.log("get data?",data)
         this.props.getMaplist(data)
       }).bind(this),      
      error: (err) => {
        console.log('ajax error');
      }
    });
  };
  componentDidMount() {  
    this.loadDataFromServer();
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
               <Login />
              </div>
            </div>
          </div>
        </div>  
        <div id="map">
          <div id="outer">
            <div id="inner">
              <Map />
            </div>
          </div>
        </div >
        <div id="photos">
          <div id="upload">
            <div id="outer">
              <div id="inner">
                <Upload />
              </div>
            </div>
          </div>
          <div id="photo">
            <div id="outer">
              <div id="inner">
                { React.Children.map(this.props.children,(child)=> React.cloneElement(child, {sorceValue : this.props.pinLocation})) }
              </div>
            </div>
          </div>
        </div>
        <div id="compare"></div>
        <div id="footer">
          <div id="outer">
            <div id="inner">
                <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default connector(App);
