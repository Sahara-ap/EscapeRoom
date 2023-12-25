import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import { TBookingData } from '../../types/types';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { setCoords, setPlaceId } from '../../store/booking-form/booking-form-slice';
import { getCoords } from '../../store/booking-form/booking-form-selectors';


type TMapProps = {
  page: 'contacts' | 'booking';
  places?: TBookingData[];
}
function Map({ page, places }: TMapProps) {
  const dispatch = useAppDispatch();
  const coordsStore = useAppSelector(getCoords);

  const settings = {
    contacts: {
      center: [59.96831, 30.31748],
      zoom: 15,
    },
    booking: {
      center: [59.96831, 30.31748],
      zoom: 10,
    }
  };

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

  useEffect(() => {
    if (places) {
      const defaultPlaceId = places[0].id;
      const defaultCoords = places[0].location.coords;
      dispatch(setPlaceId(defaultPlaceId));
      dispatch(setCoords(defaultCoords));

    }
  }, [places, dispatch]);

  function handleMarkerClick(id: TBookingData['id'], coords: TBookingData['location']['coords']) {
    dispatch(setPlaceId(id));
    dispatch(setCoords(coords));
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
        page === 'contacts' &&
        <Marker
          position={[59.96831, 30.31748]}
          icon={defaultIcon}
        >
          <Popup>
            Escape Room <br />
          </Popup>
        </Marker>
      }

      {page === 'booking' && places &&
        places.map((place) => (
          <Marker
            key={window.crypto.randomUUID()}
            position={place.location.coords}
            eventHandlers={{
              click: () => handleMarkerClick(place.id, place.location.coords)
            }}
            icon={
              place.location.coords[0] === coordsStore[0]
                ? activeIcon
                : defaultIcon
            }
          >
            <Popup>
              {place.location.address} <br />
            </Popup>
          </Marker>
        ))}

    </MapContainer>

  );
}

export { Map };
