/* global google */
import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import countriesJson from '@utils/countries.json';
import {observer} from 'mobx-react-lite';
import {Loader} from '@googlemaps/js-api-loader';
import styles from './Map.module.scss';
import mapStyles from './MapStyles';
import GlobalStoreContext from '@components/GlobalStoreContext';
import mapLoader from './map-loader.gif';
import Meta from '@utils/meta';

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
    const store = useContext(GlobalStoreContext);
    switch (store.meta) {
    case Meta.Loading:
        return <img src={mapLoader} alt="loading..." className={styles.loader} id="map"/>;
    case Meta.Error:
        return (
                <div className={styles.loader} id="map">
                  <img src={mapLoader} alt="loading..."/>
                  <h4>Простите, кажется, наше API в очередной раз прилегло отдохнуть(</h4>
                </div>
        );
    }

    const countries = countriesJson as Countries;
    const history = useHistory();
    const markersMap: Record<string, google.maps.Marker> = {};

    loader.load().then(() => {
        for (const iso of Object.keys(store.data.countries)) {
            const svgMarker = {
                path: getSvg(store.data.countries[iso].totalConfirmed),
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

        for (const iso of Object.keys(markersMap)) {
            markersMap[iso].setMap(map);
            const popupContent = `<p class="${styles.map__info}">${countries[iso].country}</p>
                                      <div class="${styles.map__infoContainer}">
                                        <h4 class="${styles.map__infoNumber}">${store.data.countries[iso].totalConfirmed}</h4>
                                        <h4 class="${styles.map__info}">INFECTED</h4>
                                      </div>`;
            const infowindow = new google.maps.InfoWindow({
                content: popupContent,
            });
            markersMap[iso].addListener('mouseover', () => {
                infowindow.open(map, markersMap[iso]);
            });
            markersMap[iso].addListener('mouseout', () => {
                infowindow.close();
            });
            markersMap[iso].addListener('click', () => {
                history.push(`/country/${iso}`);
            });
        }
    });

    return <div className={styles.map} id="map" />;
}

export default observer(Map);

// import React, { PureComponent } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
//
// const data = [
//     {
//         name: 20,
//         pv: 2400,
//     },
//     {
//         name: 30,
//         pv: 1398,
//     },
//     {
//         name: 40,
//         pv: 9800,
//     },
//     {
//         name: 50,
//         pv: 3908,
//     },
//     {
//         name: 60,
//         pv: 4800,
//     },
//     {
//         name: 70,
//         pv: 3800,
//     },
//     {
//         name: 80,
//         pv: 4300,
//     },
// ];
//
// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
//
//     render() {
//         return (
//             <ResponsiveContainer width="100%" height="100%" className={styles.map}>
//                 <LineChart
//                     width={500}
//                     height={300}
//                     data={data}
//                     margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" horizontal={false} />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Legend />
//                     <Line type="monotone" dataKey="pv" stroke="#f5c778" activeDot={{ r: 8 }} />
//                 </LineChart>
//             </ResponsiveContainer>
//         );
//     }
// }