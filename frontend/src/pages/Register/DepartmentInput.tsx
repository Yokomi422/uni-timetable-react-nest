import { Select } from "@headlessui/react";

import {
  scienceDepartments,
  engineeringDepartments,
  agricultureDepartments,
  medicalDepartments,
  economicsDepartments,
  lawDepartments,
  literatureDepartments,
  educationDepartments,
  pharmacyDepartments,
  liberalArtsDepartments,
} from "./data";

import { reducerType } from "./data";

/**
 * @param props - The props object
 * @param props.state - The state object
 * @param props.dispatch - The dispatch function
 * @returns Year input component
 */
export default function FacultyInput({ state, dispatch }: reducerType) {
  const selectedFaculty = state.faculty.value;
  return (
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <label
        htmlFor="year"
        className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
      >
        学科
      </label>
      <Select
        value={state.department.value}
        onChange={(event) =>
          dispatch({
            type: "changeDepartment",
            data: { value: event.target.value, field: event.target.value },
          })
        }
        name="year"
        className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
        id="year"
      >
        {selectedFaculty === "default" && (
          <option value="default">まず学部を選択してください</option>
        )}
        {selectedFaculty === "science" && (
          <>
            {scienceDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "engineering" && (
          <>
            {engineeringDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "agriculture" && (
          <>
            {agricultureDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "medicine" && (
          <>
            {medicalDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "economics" && (
          <>
            {economicsDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "law" && (
          <>
            {lawDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "arts" && (
          <>
            {literatureDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "education" && (
          <>
            {educationDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "pharmacy" && (
          <>
            {pharmacyDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "liberal_arts" && (
          <>
            {liberalArtsDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
      </Select>
    </div>
  );
}
