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

  onDragEnd(e) {  //  위경도 콘솔창에 찍어줌.
    console.log('onDragEndx', e.latLng.lng()); // 위도
    console.log('onDragEndy', e.latLng.lat()); // 경도
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
