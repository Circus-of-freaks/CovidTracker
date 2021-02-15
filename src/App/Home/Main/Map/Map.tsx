import { Loader } from '@googlemaps/js-api-loader';
import React from 'react';
import './Map.scss';
import { useHistory } from 'react-router-dom';
import * as countries from '@utils/countries.json';
import mapStyles from './MapStyles';

const MAP_API_KEY = 'AIzaSyCzTCZVbwEccPX1JdZ2cMZR6I6D1bYAz7U';

const loader = new Loader({
    apiKey: MAP_API_KEY,
    version: 'weekly',
    mapIds: ['1eda255439b06b05'],
});

function getSvg(confirmedCases: number): string {
    const k = 0.0002;
    const radius = `${(Math.log1p(k * confirmedCases)).toFixed(2)}`;
    const diameter = `${(2 * Math.log1p(k * confirmedCases)).toFixed(2)}`;
    const svgPart = `A ${radius} ${radius} 0 1 0 0`;
    return `m 0 0 ${svgPart} ${diameter} ${svgPart} 0 Z`;
}

function Map() {
    const history = useHistory();
    loader.load().then(() => {
        // eslint-disable-next-line no-undef
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            center: { lat: 44.177751, lng: 10.757718 },
            zoom: 2,
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: false,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            disableDoubleClickZoom: true,
            draggableCursor: 'default',
        });
        map.setOptions({ styles: mapStyles });
        const svgMarker = {
            // path: 'm 0 0 A 5 5 0 1 0 0 10 A 5 5 0 1 0 0 0 Z',
            path: getSvg(138929),
            fillColor: '#B73030',
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            // eslint-disable-next-line no-undef
            anchor: new google.maps.Point(0, 5),
        };

        // eslint-disable-next-line no-undef
        const marker = new google.maps.Marker({
            position: countries['United Kingdom'],
            map,
            icon: svgMarker,
        });
        marker.setMap(map);

        marker.addListener('click', () => {
            history.push('/home');
        });
    });

    return <div className="map" id="map" />;
}

export default Map;
