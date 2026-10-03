import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">YATRASETHU • SMART TRAVEL</div>
        <h1>Discover beyond<br /><em>the tourist map.</em></h1>
        <p>
          Find authentic places, hidden gems and local experiences
          based on what you actually love.
        </p>
        <a href="#planner" className="hero-cta">
          Start your journey <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}