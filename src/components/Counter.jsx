import React from "react";

const Counter = ({
  label,
  unit = "",
  value,
  onIncrement,
  onDecrement,
  onChange,
  maxDigit = 3,
  maxValue = 300,
}) => {
  const displayValue = value === "" || value === undefined || value === null ? "" : String(value);

  return (
    <div className="bg-gray-50 p-4 rounded-lg text-center flex-1 shadow-inner">
      <p className="text-gray-600 font-medium mb-2">
        {label} {unit && <span className="text-xs text-gray-400">({unit})</span>}
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={onDecrement}
          aria-label={`${label} 감소`}
          className="w-8 h-8 rounded-full bg-red-500 text-white font-bold text-xl flex items-center justify-center transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          -
        </button>

        <input
          type="number"
          inputMode="numeric"
          value={displayValue}
          onChange={(e) => {
            const digitsOnly = e.target.value.replace(/\D/g, "");
            if (digitsOnly.length > maxDigit) return;
            const numeric = Number(digitsOnly);
            if (numeric > maxValue) return;
            onChange(digitsOnly === "" ? "" : numeric);
          }}
          className="text-4xl sm:text-5xl font-bold text-gray-800 w-24 text-center bg-transparent focus:outline-none"
        />

        <button
          type="button"
          onClick={onIncrement}
          aria-label={`${label} 증가`}
          className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-xl flex items-center justify-center transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;