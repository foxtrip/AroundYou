import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';
import UploadView from './UploadView';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.mapClick = this.mapClick.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state ={newLng:"20", newLat:"20"}
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  // 아래 render <UploadView>를 통해 좌표를 전송하려고 함. 첫 화면에서 맵의 가장 아래쪽 pin을 움직이면 좌표값을 newLng, newLat에 저장 (brower console에서도 확인 가능)
  // UploadView.js의 componentwillreceiveprops를 보면, data를 받긴 받지만 변경되기 전 좌표값을 받음.
  
  // 예를들어 처음 움직이면(A), 움직인 뒤 좌표값이 아니라 처음 정해진 newLng:20, newLat:20을 받고
  // 다음번에 움직일때 (A)값을 전송. setState하기 전의 값을 넘기는 것 같은데 원인과 해결방법을 못찾고 있음.

  onDragEnd(e) {  //  위경도 콘솔창에 찍어줌.
    console.log('onDragEndx', e.latLng.lng()); // 움직인 pin의 위도 출력
    console.log('onDragEndy', e.latLng.lat()); // 움직인 pin의 경도 출력
    this.setState({newLng: e.latLng.lng(), newLat: e.latLng.lat()}) 
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
