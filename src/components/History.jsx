import React from "react";

const History = ({ history = [], onDeleteItem, onClearAll }) => {
  if (history.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">BMI 기록</h2>
        <p className="text-gray-500">아직 저장된 BMI 기록이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">BMI 기록</h2>
        <span className="text-xs text-gray-500">총 {history.length}건</span>
      </div>

      <ul className="space-y-3 max-h-64 overflow-y-auto pr-1">
        {history.map((item, index) => (
          <li
            key={item.id ?? `${item.date ?? "item"}-${index}`}
            className="flex justify-between items-center bg-gray-50 p-3.5 rounded-lg border border-gray-100"
          >
            <div className="space-y-0.5">
              <p className="font-bold text-gray-800 text-base">
                {item.name || "사용자"}{" "}
                {item.gender && (
                  <span className="text-xs font-medium text-gray-500">
                    ({item.gender === "Man" ? "남성" : item.gender === "Woman" ? "여성" : item.gender})
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-700 font-medium">
                BMI {Number(item.bmi).toFixed(1)} · {item.category}
              </p>
              {(item.height || item.weight || item.createdAt) && (
                <p className="text-xs text-gray-400">
                  {[
                    item.height ? `${item.height}cm` : null,
                    item.weight ? `${item.weight}kg` : null,
                    item.createdAt || null,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}
            </div>

            {onDeleteItem && item.id !== undefined && (
              <button
                type="button"
                onClick={() => onDeleteItem(item.id)}
                className="text-xs font-semibold text-red-600 hover:text-red-800 px-2.5 py-1 rounded hover:bg-red-50 transition"
              >
                삭제
              </button>
            )}
          </li>
        ))}
      </ul>

      {onClearAll && (
        <button
          type="button"
          onClick={onClearAll}
          className="w-full mt-4 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
        >
          전체 기록 삭제
        </button>
      )}
    </div>
  );
};

export default History;