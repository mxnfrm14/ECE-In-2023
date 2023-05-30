import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { AiFillPushpin } from 'react-icons/ai';

const MapComponent = () => {
    const defaultProps = {
        center: {
          lat: 48.85122482258209, 
          lng: 2.288570329473219,
        },
        zoom: 11
      };

  const [markerPosition, setMarkerPosition] = useState(defaultProps.center);

  const handleMapChange = ({ center }) => {
    setMarkerPosition(center);
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyC76aJfme0DotDwk5MXmywmzAMPA3195oo" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      onChange={handleMapChange}
      draggable={false}
    >
      <Marker
        lat={markerPosition.lat}
        lng={markerPosition.lng}
      />
    </GoogleMapReact>
  );
};

const Marker = () => (
    <div className="marker">
        <AiFillPushpin size={32} color='#661ae6' />
    </div>
);

export default MapComponent;