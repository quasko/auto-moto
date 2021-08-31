import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { MapData, PlacemarkLayout } from '../../utils/const';

function MapContainer() {
  return (
    <YMaps>
      <Map 
      defaultState={{ center: [MapData.LAT, MapData.LON], zoom: MapData.ZOOM }} 
      width={MapData.WIDTH} 
      height={MapData.HEIGHT}
      >
        <Placemark defaultGeometry={[MapData.LAT, MapData.LON]} defaultOptions={PlacemarkLayout}/>
      </Map>
    </YMaps>
  )
}

export default MapContainer;
