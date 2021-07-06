import './css/Mapita.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useFetch from '../hooks/useFetch.js'

const Mapita = () => {

    const pkParadas = useFetch('https://run.mocky.io/v3/9c4bcdd6-751e-46fd-9378-82ec8869fb5a')

    return pkParadas && (
        <>
            <p>Estás en mapa</p>
            <MapContainer id="mapid" center={[42.158865,-8.686115]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                {pkParadas && pkParadas.map( pkp => 
                    <Marker position={pkp.coords}>
                        <Popup>
                            <h2>{pkp.title}</h2>
                            <img src={pkp.image} />
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </>
    );
}

export default Mapita

// rm -rf node_modiles/.cache