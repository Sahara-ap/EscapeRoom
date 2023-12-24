import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L, { LeafletEvent } from 'leaflet';

import { TBookingData } from '../../types/types';
import { useState } from 'react';

// const CONTACTS = [59.96831, 30.31748];

type TMapProps = {
  page: 'contacts' | 'booking';
  // coords?: Array<TBookingData['location']['coords']>;
  // places: Array<TBookingData['location']>
  places: TBookingData[];
  cb?: (placeId) => void;
}
function Map({ page, places, cb }: TMapProps) {


  const settings = {
    contacts: {
      center: [59.96831, 30.31748] as const,
      zoom: 15,
    },
    booking: {
      center: [59.96831, 30.31748],
      zoom: 10,
    }
  };

  // const coords = places.map((place) => place.coords);
  const ICON_DEFAULT = '../../../markup/img/svg/pin-default.svg';
  const ICON_ACTIVE = '../../../markup/img/svg/pin-active.svg';

  const activeIcon = L.icon({
    iconUrl: ICON_ACTIVE,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });
  const defaultIcon = L.icon({
    iconUrl: ICON_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  function handleMarkerClick(id: TBookingData['id']) {
    if (cb) {
      cb(id);
    }
    // event.target.setIcon(activeIcon)
  }
  
  return (

    <MapContainer
      center={[59.96831, 30.31748]}
      zoom={settings[page].zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      {
        page !== 'booking' &&
        <Marker
          position={[59.96831, 30.31748]}
          icon={defaultIcon}
        >
          <Popup>
            Escape Room <br /> .
          </Popup>
        </Marker>
      }

      {places.map((place) => (
        <Marker
          key={window.crypto.randomUUID()}
          position={place.location.coords}
          eventHandlers={{
            click: () => handleMarkerClick(place.id)
          }}
          icon={defaultIcon}

        >
          <Popup>
            {place.location.address} <br /> .
          </Popup>
        </Marker>
      ))}

    </MapContainer>

  );
}

export { Map };
