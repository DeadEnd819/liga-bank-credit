import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import IconMark from '../../assets/img/svg/icon-map-mark.svg';
import 'leaflet/dist/leaflet.css';

const Map = ({data, points}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: data.lat,
        lng: data.lng
      },
      zoom: data.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: IconMark,
        iconSize: [35, 40]
      });

      leaflet.marker({
          lat: point.lat,
          lng: point.lng
        },
        {
          icon: customIcon
        })
        .addTo(mapRef.current)
        .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="branches__map-wrapper" id="map" />
  );
}

Map.propTypes = {
  data: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  points: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }))
};

export default Map;
