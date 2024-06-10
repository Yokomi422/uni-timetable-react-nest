import React from "react";
import Footer from "../../components/Footer";

/**
 *
 * @returns 授業検索ページ
 */
export default function Search() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-center text-4xl font-bold">授業検索</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">学部</h2>
          <select className="mt-4 w-full rounded-lg border-2 p-2">
            <option value="">学部を選択</option>
            <option value="工学部">工学部</option>
            <option value="理学部">理学部</option>
            <option value="文学部">文学部</option>
            <option value="経済学部">経済学部</option>
          </select>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">学科</h2>
          <select className="mt-4 w-full rounded-lg border-2 p-2">
            <option value="">学科を選択</option>
            <option value="計数工学科">計数工学科</option>
            <option value="航空宇宙工学科">航空宇宙工学科</option>
            <option value="マテリアル工学科">マテリアル工学科</option>
            <option value="建築学科">建築学科</option>
          </select>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">曜日</h2>
          <select className="mt-4 w-full rounded-lg border-2 p-2">
            <option value="">曜日を選択</option>
            {["月", "火", "水", "木", "金"].map((day) => (
              <option key={day} value={day}>
                {day}曜日
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">時限</h2>
          <select className="mt-4 w-full rounded-lg border-2 p-2">
            <option value="">時限を選択</option>
            {["1", "2", "3", "4", "5", "6"].map((period) => (
              <option key={period} value={period}>
                {period}限
              </option>
            ))}
          </select>
        </div>

        <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white">
          検索
        </button>

        <div className="mt-8 space-y-4">
          {/* Classes search results will be displayed here */}
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h3 className="text-xl font-bold">Class Name</h3>
            <p className="text-gray-800">学部: Faculty</p>
            <p className="text-gray-800">学科: Department</p>
            <p className="text-gray-800">クレジット: Credits</p>
            <p className="text-gray-800">セメスター: Semester</p>
            <p className="text-gray-800">教師: Teacher</p>
            <p className="text-gray-800">曜日: Day</p>
            <p className="text-gray-800">時限: Period</p>
            <p className="text-gray-800">計画: Plan</p>
            <p className="text-gray-800">評価方法: Grading</p>
            <p className="text-gray-800">注意: Caution</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
