import React from "react";

const GenderSelector = ({ selectedGender, onGenderChange }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-center text-xl">성별 선택</h3>
      <div className="flex justify-center items-center gap-6">
        <button
          type="button"
          onClick={() => onGenderChange("Man")}
          className={`flex flex-col items-center gap-2 p-4 rounded-3xl cursor-pointer transition-all duration-200 w-32 h-32 justify-center ${
            selectedGender === "Man"
              ? "bg-blue-100 border-2 border-blue-500 shadow-md"
              : "bg-gray-100 border-2 border-transparent hover:bg-gray-200/70"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${
              selectedGender === "Man" ? "bg-blue-200" : "bg-gray-200"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="font-semibold text-gray-700">남성</span>
        </button>

        <button
          type="button"
          onClick={() => onGenderChange("Woman")}
          className={`flex flex-col items-center gap-2 p-4 rounded-3xl cursor-pointer transition-all duration-200 w-32 h-32 justify-center ${
            selectedGender === "Woman"
              ? "bg-pink-100 border-2 border-pink-500 shadow-md"
              : "bg-gray-100 border-2 border-transparent hover:bg-gray-200/70"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${
              selectedGender === "Woman" ? "bg-pink-200" : "bg-gray-200"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-pink-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="font-semibold text-gray-700">여성</span>
        </button>
      </div>
    </div>
  );
};

export default GenderSelector;