import { Select } from "@headlessui/react";

import { facultyOptions, reducerType } from "./data";

type FacaltyProps = {
  selectedFaculty: string;
  setSelectedFaculty: React.Dispatch<React.SetStateAction<string>>;
};

interface FacultyOption {
  value: string;
  field: string;
}

/**
 * @param props - The props object
 * @param props.state - The state object
 * @param props.dispatch - The dispatch function
 * @returns Year input component
 */
export default function FacultyInput({ state, dispatch }: reducerType) {
  return (
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <label
        htmlFor="year"
        className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
      >
        学科
      </label>
      <Select
        value={state.faculty.value}
        onChange={(event) =>
          dispatch({
            type: "changeFaculty",
            data: { value: event.target.value, field: event.target.value },
          })
        }
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
