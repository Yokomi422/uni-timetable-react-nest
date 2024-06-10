import React from "react";
import Footer from "../../components/Footer";

const days = ["月", "火", "水", "木", "金", "土"];
const periods = ["1限", "2限", "3限", "4限", "5限", "6限"];

const timetable: { [key: string]: string[] } = {
  月: ["", "", "", "", "", ""],
  火: ["", "", "", "", "", ""],
  水: ["", "", "", "", "", ""],
  木: ["", "", "", "", "", ""],
  金: ["", "", "", "", "", ""],
  土: ["", "", "", "", "", ""],
};

/**
 *
 * @returns 時間割ページ
 */
export default function Timetable() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 pb-16">
      <div className="w-full max-w-7xl mx-auto px-8 py-16 bg-white rounded-lg shadow-md">
        <h1 className="mb-12 text-center text-6xl font-bold">時間割</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-8 py-6 text-center text-2xl">
                  時限
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="border border-gray-300 px-8 py-6 text-center text-2xl"
                  >
                    {day}曜日
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period, periodIdx) => (
                <tr key={period}>
                  <td className="border border-gray-300 px-8 py-6 text-center text-2xl">
                    {period}
                  </td>
                  {days.map((day) => (
                    <td
                      key={day}
                      className="border border-gray-300 px-8 py-6 text-center text-2xl"
                    >
                      {timetable[day][periodIdx] || "授業なし"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
