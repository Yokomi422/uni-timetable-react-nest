import { Select } from "@headlessui/react";
import { useState, useEffect } from "react";

const yearOptions = [
  { value: "1", field: "1" },
  { value: "2", field: "2" },
  { value: "3", field: "3" },
  { value: "4", field: "4" },
  { value: "5", field: "5" },
  { value: "6", field: "6" },
];

/**
 *
 * @returns Year input component
 */
export default function YearInput() {
  const [selectedYear, setSelectedYear] = useState("1");

  useEffect(() => {
    console.log("YearInput component mounted", selectedYear);
  }, [selectedYear]);

  return (
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <label
        htmlFor="year"
        className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
      >
        学年
      </label>
      <Select
        value={selectedYear}
        onChange={(event) => setSelectedYear(event.target.value)}
        name="year"
        className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
        id="year"
      >
        {yearOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.field}
          </option>
        ))}
      </Select>
    </div>
  );
}
