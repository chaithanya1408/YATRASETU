const options = [
  { value: 500, label: "₹0–500" },
  { value: 1000, label: "₹500–1000" },
  { value: 2000, label: "₹1000+" }
];

export default function BudgetSelector({ budget, setBudget }) {
  return (
    <div className="option-row">
      {options.map((option) => (
        <button
          type="button"
          key={option.value}
          className={`option ${budget === option.value ? "active" : ""}`}
          onClick={() => setBudget(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}