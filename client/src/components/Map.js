import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';

class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  onDragEnd(e) {  //  위경도 콘솔창에 찍어줌.
    console.log('onDragEnd', e.pixel.x);
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
      {this.props.marker.map((map,i) => {
          return (<Marker lat={map.lat} lng={map.lng} key={i} onClick={this.mapClick.bind(this, {map})} />);
      })};
      </Gmaps>
    );
  };
};

export default Map;
