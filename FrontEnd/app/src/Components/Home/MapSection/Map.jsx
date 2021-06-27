import React, { Component } from 'react';
import './Map.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '700px',
    height: '500px'
};

const center = {
    lat: 6.914890510962993,
    lng: 79.97295522615666
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

export default class MapSection extends Component {
    render() {
        return (
            <div id='map'>
                {/* <div className='container'> */}
                <div className='section-title text-center'>
                    <h2>Conference Venue</h2>
                </div>
                <div className='row'>
                    <div className='col-xs-12 col-md-6'>
                        <LoadScript
                            googleMapsApiKey="AIzaSyAspUe2Qs6uYpcT7JFkaMhALTSAEBucQqA">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}>
                                <Marker
                                    onLoad={onLoad}
                                    position={center}
                                    label={"Sri Lanka Institute of Information Technology"} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <div className='map-text'>
                            <p>DevLearn will provide you with the answers to today’s toughest
                            challenges, while also giving you the guidance to navigate the
                            uncertain times ahead. You’ll find passionate, like-minded
                            professionals who are leading their organizations’ use of
                            learning technologies. The comprehensive program includes tools,
                            technologies, ideas, strategies, and best practices to ensure your
                            success. Whether you’re new to the field or a seasoned expert,
                            DevLearn is the place to engage with your professional community
                            and explore how technology can support learning and development.
                                        Attendees’ roles include:</p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        )
    }
}