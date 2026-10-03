import { ArrowUpRight, MapPin } from "lucide-react";

const districts = [
  "Alluri Sitharama Raju", "Anakapalli", "Anantapur", "Bapatla",
  "Chittoor", "East Godavari", "Eluru", "Guntur",
  "Kakinada", "Krishna", "NTR", "Palnadu",
  "Prakasam", "Tirupati", "Visakhapatnam", "Vizianagaram"
];

export default function Districts() {
  return (
    <main className="page">
      <section className="page-header">
        <div className="section-kicker">EXPLORE ANDHRA PRADESH</div>
        <h1>Discover every <em>district.</em></h1>
        <p>Explore destinations, culture, nature and hidden places across Andhra Pradesh.</p>
      </section>

      <section className="district-grid">
        {districts.map((district, index) => (
          <article className="district-card" key={district}>
            <div className="district-number">{String(index + 1).padStart(2, "0")}</div>
            <MapPin size={23} />
            <h3>{district}</h3>
            <button type="button">Explore <ArrowUpRight size={15} /></button>
          </article>
        ))}
      </section>
    </main>
  );
}