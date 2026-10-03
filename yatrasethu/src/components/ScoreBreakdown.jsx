import { Sparkles, Wallet, MapPin, Clock3, Star } from "lucide-react";

export default function ScoreBreakdown({ place, score, interests }) {
  const interestMatches = place.interests.filter((i) => interests.includes(i));

  return (
    <section className="detail-panel">
      <div className="detail-top">
        <div>
          <div className="mini-label">WHY THIS PLACE?</div>
          <h2>{place.name}</h2>
          <p>{place.description}</p>
        </div>
        <div className="score-circle"><strong>{score}</strong><span>Hidden Gem Score</span></div>
      </div>

      <div className="factor-grid">
        <div className="factor"><Sparkles size={19} /><span>Interest match</span><strong>{interestMatches.length || "Good"} match</strong></div>
        <div className="factor"><Wallet size={19} /><span>Budget</span><strong>₹{place.budget}</strong></div>
        <div className="factor"><MapPin size={19} /><span>Distance</span><strong>{place.distance} km</strong></div>
        <div className="factor"><Clock3 size={19} /><span>Time</span><strong>{place.duration} hours</strong></div>
        <div className="factor"><Star size={19} /><span>Rating</span><strong>{place.rating}/5</strong></div>
      </div>
    </section>
  );
}