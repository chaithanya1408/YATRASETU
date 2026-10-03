export default function DistanceSlider({ distance, setDistance }) {
  return (
    <div className="distance-section">
      <div className="distance-header">
        <span>Maximum travel distance</span>
        <strong>{distance} km</strong>
      </div>
      <input
        type="range"
        min="5"
        max="100"
        step="5"
        value={distance}
        onChange={(e) => setDistance(Number(e.target.value))}
      />
      <div className="range-labels"><span>5 km</span><span>100 km</span></div>
    </div>
  );
}