import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';
import UploadView from './UploadView';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state ={newLng:"20", newLat:"20"};  // 움직인 pin의 위도, 경도 값을 죄다 upload view로 넘긴다.//어떻게??? 
    this.mapClick = this.mapClick.bind(this);// 1.pin 클릭하면 2.해당 위 경도가 일지하는 사진만 mapping 해서 보여주도록 구현해야  
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  onDragEnd(e) {  //  위경도 콘솔창에 찍어줌.// state 값 변경시킴. 
    console.log('x: ', e.latLng.lng(),' y: ', e.latLng.lat()); // 움직인 pin의 위도, 경도 값을 upload view로 넘겨야 한다. 
    this.setState({newLng: e.latLng.lng(), newLat: e.latLng.lat()}); 
  };

  mapClick(event, map){
    this.props.onClick(event, map);
  };

  render() {
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
        <Marker lat={37.581770} lng={126.985966} draggable={true} onDragEnd={this.onDragEnd} />
        <UploadView newLng={this.state.newLng} newLat={this.state.newLat} />
        {this.props.marker.map((map,i) => {
          return (<Marker lat={map.lat} lng={map.lng} key={i} onClick={this.mapClick.bind(this, {map})} />);
        })};
      </Gmaps>
    );
  };
};

export default Map;
