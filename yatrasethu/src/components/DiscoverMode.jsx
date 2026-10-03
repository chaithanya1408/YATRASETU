const modes = [
  { id: "hidden", icon: "💎", title: "Hidden gems", description: "Lower visibility, strong ratings" },
  { id: "famous", icon: "⭐", title: "Famous places", description: "Well-known highlights" },
  { id: "mixed", icon: "🔀", title: "Mix both", description: "A blend of the two" }
];

export default function DiscoverMode({ mode, setMode }) {
  return (
    <div className="mode-grid">
      {modes.map((item) => (
        <button
          type="button"
          key={item.id}
          className={`mode-card ${mode === item.id ? "active" : ""}`}
          onClick={() => setMode(item.id)}
        >
          <span className="mode-icon">{item.icon}</span>
          <div>
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </div>
        </button>
      ))}
    </div>
  );
}