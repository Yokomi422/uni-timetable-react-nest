import { Select } from "@headlessui/react";
import { useState } from "react";

const facultyOptions = [{ value: "default", field: "学部を選択してください" }];

/**
 *
 * @returns Year input component
 */
export default function FacultyInput() {
  const [selectedYear, setSelectedYear] = useState("default");

  return (
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <label
        htmlFor="year"
        className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
      >
        学科
      </label>
      <Select
        value={selectedYear}
        onChange={(event) => setSelectedYear(event.target.value)}
        name="year"
        className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
        id="year"
      >
        {facultyOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.field}
          </option>
        ))}
      </Select>
    </div>
  );
}
