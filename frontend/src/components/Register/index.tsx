import React from "react";

/**
 * @returns Profile form component
 */
export default function ProfileForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-8 text-center text-4xl font-bold">
          プロフィールフォーム
        </h1>
        <form>
          {/* Year input */}
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label
              htmlFor="year"
              className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              Year
            </label>
            <input
              type="number"
              className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
              id="year"
              placeholder="Year"
            />
          </div>

          {/* Faculty input */}
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label
              htmlFor="faculty"
              className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              Faculty
            </label>
            <select
              id="faculty"
              className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
            >
              <option value="">Select Faculty</option>
              <option value="engineering">Engineering</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
            </select>
          </div>

          {/* Department input */}
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label
              htmlFor="department"
              className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              Department
            </label>
            <select
              id="department"
              className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
            >
              <option value="">Select Department</option>
              <option value="computer_science">Computer Science</option>
              <option value="mechanical_engineering">
                Mechanical Engineering
              </option>
              <option value="electrical_engineering">
                Electrical Engineering
              </option>
            </select>
          </div>

          {/* Interests textarea */}
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label
              htmlFor="interests"
              className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              Interests
            </label>
            <textarea
              className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
              id="interests"
              rows={3}
              placeholder="Enter your interests"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              type="checkbox"
              value=""
              id="exampleCheck10"
            />
            <label
              className="text-sm font-medium text-neutral-500 dark:text-neutral-300"
              htmlFor="exampleCheck10"
            >
              Send me a copy of this message
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-6 py-3 text-white text-sm font-medium uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
