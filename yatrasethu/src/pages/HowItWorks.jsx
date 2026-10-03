import { Map, SlidersHorizontal, Sparkles, Route } from "lucide-react";

const steps = [
  { number: "01", icon: Map, title: "Choose your destination", text: "Tell YatraSethu where you want to explore." },
  { number: "02", icon: SlidersHorizontal, title: "Set your preferences", text: "Choose interests, budget, available time and travel distance." },
  { number: "03", icon: Sparkles, title: "Get explainable recommendations", text: "Places are scored against your preferences instead of appearing as an unexplained list." },
  { number: "04", icon: Route, title: "Explore and navigate", text: "Open the location on the map and plan your route." }
];

export default function HowItWorks() {
  return (
    <main className="page">
      <section className="page-header">
        <div className="section-kicker">HOW YATRASETHU WORKS</div>
        <h1>From preferences to <em>discovery.</em></h1>
        <p>A simple recommendation flow designed around the traveller rather than the tourist crowd.</p>
      </section>

      <section className="steps">
        {steps.map(({ number, icon: Icon, title, text }) => (
          <article className="step" key={number}>
            <div className="step-icon"><Icon size={25} /></div>
            <div className="step-number">{number}</div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}