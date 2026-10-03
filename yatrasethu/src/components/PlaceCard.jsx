import { MapPin, Star, Clock3, Wallet, ArrowUpRight } from "lucide-react";

export default function PlaceCard({ place, score, onSelect }) {
  return (
    <article className="place-card">
      <div className="place-image-wrap">
        <img src={place.image} alt={place.name} />
        <div className="score-badge">{score}<small>/100</small></div>
        <span className="place-tag">{place.district}</span>
      </div>

      <div className="place-content">
        <h3>{place.name}</h3>
        <p>{place.description}</p>

        <div className="place-info">
          <span><MapPin size={14} /> {place.distance} km</span>
          <span><Wallet size={14} /> ₹{place.budget}</span>
          <span><Star size={14} /> {place.rating}</span>
          <span><Clock3 size={14} /> {place.duration}h</span>
        </div>

        <button type="button" className="view-button" onClick={() => onSelect(place)}>
          Explore place <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
}