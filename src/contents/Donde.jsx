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
        <div className='row bg-black px-5'>
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
                    <h3 className='text-white '>Casa Matriz</h3>
                    <ul className='text-white' style={{listStyleType:'none'}}>
                        <li><i className="fa-solid fa-house"></i> Ocean Avenue</li>
                        <li><i className="fa-solid fa-paper-plane"></i> contacto@angryburger.com</li>
                        <li><i className="fa-solid fa-mobile-screen-button"></i> 1-800-U-BURGER</li>
                    </ul>
                </div>

                <div className='container col-3 mx-3 mt-5 mb-5'>
                    <MapContainer center={[-33.444687030327366, -70.6561176344248]} zoom={20} style={{ height: "30vh"}}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-33.444687030327366, -70.6561176344248]}>
                            <Popup>
                                Alameda <br /> desde 1981.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='col-6 mt-5'>
                <h3 className='text-white '>Sucursal Alameda</h3>
                    <ul className='text-white' style={{listStyleType:'none'}}>
                        <li><i className="fa-solid fa-house"></i> Torre Entel</li>
                        <li><i className="fa-solid fa-paper-plane"></i> contacto@angryburger.com</li>
                        <li><i className="fa-solid fa-mobile-screen-button"></i> 1-800-E-BURGER</li>
                    </ul>
                </div>
   

        </div>
    );
};

export default Donde;