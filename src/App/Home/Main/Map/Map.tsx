/* global google */
import React from 'react';
// import { useHistory } from 'react-router-dom';
import countriesJson from '@utils/countries.json';
import GlobalStatStore from '@Store/GlobalStatStore/GlobalStatStore';
import { observer } from 'mobx-react-lite';
import { Loader } from '@googlemaps/js-api-loader';
import styles from './Map.module.scss';
import mapStyles from './MapStyles';

const MAP_API_KEY = 'AIzaSyCzTCZVbwEccPX1JdZ2cMZR6I6D1bYAz7U';

const loader = new Loader({
    apiKey: MAP_API_KEY,
    version: 'weekly',
    mapIds: ['1eda255439b06b05'],
});

type Countries = Record<string, {
    country: string,
    coordinates: {
        lat: number,
        lng: number,
    }
}>

function getSvg(confirmedCases: number): string {
    const k = 0.0002;
    const radius = (Math.log1p(k * confirmedCases)).toFixed(2);
    const diameter = `${Number(radius) * 2}`;
    const svgPart = `A ${radius} ${radius} 0 1 0 0`;
    return `m 0 0 ${svgPart} ${diameter} ${svgPart} 0 Z`;
}

function Map() {
    const store = new GlobalStatStore();
    const storePromise = store.fetch();
    const countries = countriesJson as Countries;
    // const history = useHistory();
    const markersMap: Record<string, google.maps.Marker> = {};

    storePromise.then(() => {
        for (const [iso, info] of Object.entries(store.data.countries)) {
            const svgMarker = {
                path: getSvg(info.totalConfirmed),
                fillColor: '#B73030',
                fillOpacity: 1,
                strokeWeight: 0,
                rotation: 0,
                scale: 2,
                anchor: new google.maps.Point(0, 2.5),
            };
            if (countries[iso]) {
                markersMap[iso] = new google.maps.Marker({
                    position: countries[iso].coordinates,
                    icon: svgMarker,
                });

                // markersMap[iso].addListener('click', () => {
                //     history.push(`/${countries[iso].country}`);
                // });
            }
        }
    });

    loader.load().then(() => {
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            center: { lat: 44.177751, lng: 10.757718 },
            zoom: 2,
            // disableDefaultUI: true,
            // scrollwheel: false,
            // draggable: false,
            // zoomControl: false,
            // streetViewControl: false,
            // mapTypeControl: false,
            // disableDoubleClickZoom: true,
            // draggableCursor: 'default',
        });
        map.setOptions({ styles: mapStyles });
        storePromise.then(() => {
            for (const [iso, marker] of Object.entries(markersMap)) {
                marker.setMap(map);
                const popupContent = `<p class="${styles.map__info}">${countries[iso].country}</p>
                                      <div class="${styles.map__infoContainer}">
                                        <h4 class="${styles.map__infoNumber}">${111}</h4>
                                        <h4 class="${styles.map__info}">INFECTED</h4>
                                      </div>`;
                const infowindow = new google.maps.InfoWindow({
                    content: popupContent,
                });
                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            }
        });
    });

    return <div className={styles.map} id="map" />;
}

export default observer(Map);
