import { Select } from "@headlessui/react";
import { useState } from "react";

type FacaltyProps = {
  selectedFaculty: string;
  setSelectedFaculty: React.Dispatch<React.SetStateAction<string>>;
};

interface FacultyOption {
  value: string;
  field: string;
}

const facultyOptions: FacultyOption[] = [
  { value: "default", field: "学部を選択してください" },
  { value: "science", field: "理学部" },
  { value: "engineering", field: "工学部" },
  { value: "agriculture", field: "農学部" },
  { value: "medicine", field: "医学部" },
  { value: "economics", field: "経済学部" },
  { value: "law", field: "法学部" },
  { value: "arts", field: "文学部" },
  { value: "education", field: "教育学部" },
  { value: "pharmacy", field: "薬学部" },
  { value: "liberal_arts", field: "教養学部" },
];

/**
 * @param props - The props object
 * @param props.selectedFaculty - The selected faculty
 * @param props.setSelectedFaculty - The function to set the selected faculty
 * @returns Year input component
 */
export default function FacultyInput({
  selectedFaculty,
  setSelectedFaculty,
}: FacaltyProps) {
  return (
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <label
        htmlFor="year"
        className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
      >
        学科
      </label>
      <Select
        value={selectedFaculty}
        onChange={(event) => setSelectedFaculty(event.target.value)}
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
