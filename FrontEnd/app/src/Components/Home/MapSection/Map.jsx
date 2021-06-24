import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
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
            <div>
                <h1>Event venue</h1>
                {/* FIXME: not working since API_KEY missing */}
                {/* <LoadScript */}
                    {/*  googleMapsApiKey=""> */}
                    {/* TODO: remove this before commit */}
                    {/* <GoogleMap */}
                         {/* mapContainerStyle={containerStyle} */}
                         {/* center={center} */}
                         {/* zoom={10}> */}
                        {/* <Marker */}
                             {/* onLoad={onLoad} */}
                            {/* position={center} */}
                            {/* label={"Sri Lanka Institute of Information Technology"} /> */}
                    {/* </GoogleMap> */}
                {/* </LoadScript> */}
            </div>
        )
    }
}