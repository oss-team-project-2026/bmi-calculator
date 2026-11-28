import React from "react";

const CATEGORY_STYLES = {
  Underweight: {
    label: "저체중",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  "Normal Weight": {
    label: "정상 체중",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  Overweight: {
    label: "과체중",
    color: "text-yellow-700",
    bgColor: "bg-yellow-100",
  },
  Obese: {
    label: "비만",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
};

const BMIResult = ({ bmi, category, onGoToExercise }) => {
  if (!bmi) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">BMI 결과</h2>
        <p className="text-gray-500">키와 몸무게를 입력한 뒤 계산 버튼을 눌러주세요.</p>
      </div>
    );
  }

  const numericBmi = Number(bmi);
  const style = CATEGORY_STYLES[category] || {
    label: category || "결과",
    color: "text-gray-700",
    bgColor: "bg-gray-100",
  };

  const minBMI = 15;
  const maxBMI = 35;
  const percentage = Math.max(
    0,
    Math.min(100, ((numericBmi - minBMI) / (maxBMI - minBMI)) * 100)
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">BMI 결과</h2>

      <div className="text-center mb-4">
        <p className="text-5xl font-extrabold text-gray-900">{numericBmi.toFixed(1)}</p>
        <span
          className={`mt-2 text-base font-semibold px-4 py-1 rounded-full inline-block ${style.bgColor} ${style.color}`}
        >
          {style.label}
        </span>
      </div>

      <div className="w-full mt-6">
        <div className="relative py-3">
          <div className="w-full h-4 rounded-full flex overflow-hidden">
            <div className="flex-1 bg-blue-400"></div>
            <div className="flex-1 bg-green-400"></div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-red-500"></div>
          </div>

          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-gray-800 rounded-full shadow-lg transition-all duration-300"
            style={{ left: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between text-xs sm:text-sm text-gray-700 mt-2">
        <span className="flex-1 text-center">저체중</span>
        <span className="flex-1 text-center">정상</span>
        <span className="flex-1 text-center">과체중</span>
        <span className="flex-1 text-center">비만</span>
      </div>

      {onGoToExercise && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={onGoToExercise}
            className="px-4 py-2 rounded-lg bg-[#e50158] text-white text-sm font-semibold hover:bg-[#d10151] transition"
          >
            맞춤 운동 검색하러 가기
          </button>
        </div>
      )}
    </div>
  );
};

export default BMIResult;