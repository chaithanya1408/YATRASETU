const options = [
  { value: 2, label: "2 hours" },
  { value: 5, label: "Half day" },
  { value: 8, label: "1 day" }
];

export default function TimeSelector({ time, setTime }) {
  return (
    <div className="option-row">
      {options.map((option) => (
        <button
          type="button"
          key={option.value}
          className={`option ${time === option.value ? "active" : ""}`}
          onClick={() => setTime(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}