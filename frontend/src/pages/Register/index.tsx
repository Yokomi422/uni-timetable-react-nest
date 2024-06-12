import { useState } from "react";

import YearInput from "./YearInput";
import FacultyInput from "./FacaltyInput";
import DepartmentInput from "./DepartmentInput";

/**
 * @returns Profile form component
 */
export default function ProfileForm() {
  const [selectedYear, setSelectedYear] = useState("1");
  const [selectedFaculty, setSelectedFaculty] = useState("default");
  const [selectedDepartment, setSelectedDepartment] = useState("default");
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-8 text-center text-4xl font-bold">
          プロフィールフォーム
        </h1>
        <form>
          {/* Year input */}
          <YearInput
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />

          {/* Faculty input */}
          <FacultyInput
            selectedFaculty={selectedFaculty}
            setSelectedFaculty={setSelectedFaculty}
          />

          {/* Department input */}
          <DepartmentInput
            selectedDepartment={selectedDepartment}
            selectedFaculty={selectedFaculty}
            setSelectedDepartment={setSelectedDepartment}
          />

          {/* Interests textarea */}
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label
              htmlFor="interests"
              className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              あなたの興味・関心を半角スペースで区切って入力してください
            </label>
            <textarea
              className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
              id="interests"
              rows={3}
              placeholder="Enter your interests"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-6 py-3 text-white text-sm font-medium uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
}
