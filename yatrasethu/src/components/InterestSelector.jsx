const interests = [
  { id: "nature", icon: "🌿", name: "Nature" },
  { id: "history", icon: "🏛️", name: "History" },
  { id: "photography", icon: "📸", name: "Photography" },
  { id: "food", icon: "🍜", name: "Food" },
  { id: "adventure", icon: "🏔️", name: "Adventure" },
  { id: "spiritual", icon: "🛕", name: "Spiritual" },
  { id: "culture", icon: "🎭", name: "Culture" },
  { id: "architecture", icon: "🏗️", name: "Architecture" },
  { id: "scenic", icon: "🌅", name: "Scenic" }
];

export default function InterestSelector({ selected, setSelected }) {
  function toggle(id) {
    setSelected(
      selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    );
  }

  return (
    <div className="interest-grid">
      {interests.map((item) => (
        <button
          type="button"
          key={item.id}
          className={`interest ${selected.includes(item.id) ? "active" : ""}`}
          onClick={() => toggle(item.id)}
        >
          <span>{item.icon}</span>{item.name}
        </button>
      ))}
    </div>
  );
}