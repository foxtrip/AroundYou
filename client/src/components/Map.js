import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';
import UploadView from './UploadView';
import { store, connector } from './Store';//REDUX

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.onMapCreated = this.onMapCreated.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
  };
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    })
  };
  onDragEnd(e) { //newMarker 움직인 뒤 위경도 값 추출.
    const x = e.latLng.lat();
    const y = e.latLng.lng();
    const val = {lat:x, lng:y};
    console.log('x?? ',x)//ok
    this.props.getPinlocation(val);//STORE 에 바로 저장. 
  };
  render() {
    var newMarker = undefined;// upload click시 map에 유동적인 marker 생성.
    if(this.props.newmarker){
      var newMarker = (<Marker lat={37.581770} lng={126.985966} draggable={true} onDragEnd={this.onDragEnd} />)
    }
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={37.583003} // 북촌 위도
        lng={126.985071} // 북촌 경도
        zoom={17}
        loadingMessage={'Loading Araound Maps'}
        params={{v: '3.exp', key: 'AIzaSyApEhbvTjERHndLY1yOdaAES-Fr8-yPrCg'}}
        onMapCreated={this.onMapCreated}>
        {newMarker}
        <UploadView />
        {this.props.mapList.map((map,i) => {
          return (<Marker lat={map.lat} lng={map.lng} key={i} />);
        })};
      </Gmaps>
    );
  };
};

module.exports =  connector(Map)
