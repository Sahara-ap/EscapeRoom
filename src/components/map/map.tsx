import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Map() {
  return (

    <MapContainer
      center={[59.96831, 30.31748]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      <Marker position={[59.96831, 30.31748]}>
        <Popup>
          Escape Room <br /> .
        </Popup>
      </Marker>
    </MapContainer>

  );
}

export { Map };
