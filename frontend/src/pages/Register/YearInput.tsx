import { Select } from "@headlessui/react";

import { yearOptions, reducerType } from "./data";
/**
 * Year input component
 * @param props - The props object
 * @param props.state - The state object
 * @param props.dispatch - The dispatch function
 * @returns Year input component
 */
export default function YearInput({ state, dispatch }: reducerType) {
  return (
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <label
        htmlFor="year"
        className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
      >
        学年
      </label>
      <Select
        value={state.year.value}
        onChange={(event) =>
          dispatch({
            type: "changeYear",
            data: { value: event.target.value, field: event.target.value },
          })
        }
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
