import { useMemo, useState } from "react";
import { Search, Sparkles, ShieldCheck } from "lucide-react";
import Hero from "../components/Hero";
import InterestSelector from "../components/InterestSelector";
import BudgetSelector from "../components/BudgetSelector";
import TimeSelector from "../components/TimeSelector";
import DistanceSlider from "../components/DistanceSlider";
import DiscoverMode from "../components/DiscoverMode";
import PlaceCard from "../components/PlaceCard";
import ScoreBreakdown from "../components/ScoreBreakdown";
import MapView from "../components/MapView";
import Loading from "../components/Loading";
import places from "../data/places";
import { rankPlaces } from "../utils/recommendation";

export default function Home() {
  const [destination, setDestination] = useState("Vijayawada");
  const [interests, setInterests] = useState([]);
  const [budget, setBudget] = useState(500);
  const [time, setTime] = useState(2);
  const [distance, setDistance] = useState(40);
  const [mode, setMode] = useState("hidden");
  const [results, setResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  const preferences = useMemo(() => ({
    destination,
    interests,
    budget,
    time,
    distance,
    mode
  }), [destination, interests, budget, time, distance, mode]);

  function discoverPlaces() {
    setLoading(true);
    setSelectedPlace(null);

    window.setTimeout(() => {
      const ranked = rankPlaces(places, preferences);
      setResults(ranked);
      setLoading(false);

      document.getElementById("results")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 650);
  }

  return (
    <main>
      <Hero />

      <section id="planner" className="planner-section">
        <div className="planner-intro">
          <div className="section-kicker">PLAN YOUR DISCOVERY</div>
          <h2>Tell us what kind of <em>experience</em> you want.</h2>
          <p>Set your preferences and YatraSethu will explain why each recommendation matches you.</p>
        </div>

        <div className="planner-card">
          <div className="form-section">
            <div className="label-row">
              <label>Where are you going?</label>
              <span>01</span>
            </div>
            <select value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option>Vijayawada</option>
              <option>Visakhapatnam</option>
              <option>Tirupati</option>
              <option>Araku</option>
              <option>Amaravati</option>
              <option>Guntur</option>
            </select>
          </div>

          <div className="form-section">
            <div className="label-row">
              <label>What do you love?</label>
              <span>02</span>
            </div>
            <InterestSelector selected={interests} setSelected={setInterests} />
          </div>

          <div className="form-section">
            <div className="label-row">
              <label>Budget per person</label>
              <span>03</span>
            </div>
            <BudgetSelector budget={budget} setBudget={setBudget} />
          </div>

          <div className="form-section">
            <div className="label-row">
              <label>Time available</label>
              <span>04</span>
            </div>
            <TimeSelector time={time} setTime={setTime} />
          </div>

          <div className="form-section">
            <div className="label-row">
              <label>How far are you willing to go?</label>
              <span>05</span>
            </div>
            <DistanceSlider distance={distance} setDistance={setDistance} />
          </div>

          <div className="form-section">
            <div className="label-row">
              <label>What should we show you?</label>
              <span>06</span>
            </div>
            <DiscoverMode mode={mode} setMode={setMode} />
          </div>

          <button type="button" className="discover-button" onClick={discoverPlaces}>
            <Sparkles size={19} /> Discover hidden gems
          </button>

          <div className="trust-row">
            <span><ShieldCheck size={16} /> Transparent scoring</span>
            <span><Search size={16} /> Preference based</span>
          </div>
        </div>
      </section>

      {loading && <Loading />}

      {!loading && results.length > 0 && (
        <section id="results" className="results-section">
          <div className="results-header">
            <div>
              <div className="section-kicker">YOUR DISCOVERY LIST</div>
              <h2>Places worth <em>discovering.</em></h2>
            </div>
            <div className="result-count">{results.length} matches</div>
          </div>

          <div className="results-grid">
            {results.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                score={place.score}
                onSelect={setSelectedPlace}
              />
            ))}
          </div>

          {selectedPlace && (
            <>
              <ScoreBreakdown
                place={selectedPlace}
                score={selectedPlace.score}
                interests={interests}
              />
              <MapView place={selectedPlace} />
            </>
          )}
        </section>
      )}
    </main>
  );
}