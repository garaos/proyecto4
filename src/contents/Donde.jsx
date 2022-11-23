import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"


const Donde = () => {
    React.useEffect(() => {
        const L = require("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: require("leaflet/dist/images/marker-icon.png"),
            shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    }, []);

    return (
        <div className='row bg-black'>
            <h1 className='mt-5 text-white '>Nuestros Locales</h1>

                <div className='container col-3 mx-3 mt-5'>
                    <MapContainer center={[40.61939, -73.95511]} zoom={20} style={{ height: "30vh" }}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[40.61939, -73.95511]}>
                            <Popup>
                                Ocean Avenue <br /> Evil headquarters
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='col-6 mt-5'>
                    <p className='text-white '>local 1</p>
                </div>

                <div className='container col-3 mx-3 mt-5 mb-5'>
                    <MapContainer center={[51.505, -0.09]} zoom={20} style={{ height: "30vh" }}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='col-6 mt-5'>
                    <p className='text-white '>local 2</p>
                </div>
   

        </div>
    );
};

export default Donde;