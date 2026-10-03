import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ place }) {
  return (
    <section className="map-section">
      <div className="section-kicker">LOCATION</div>
      <h2>Find your way there</h2>
      <div className="map-wrap">
        <MapContainer
          center={[place.latitude, place.longitude]}
          zoom={12}
          scrollWheelZoom={false}
          style={{ height: "430px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[place.latitude, place.longitude]}>
            <Popup><strong>{place.name}</strong><br />{place.description}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}