import React from "react";
import Footer from "../../components/Footer";

/**
 *
 * @returns プロフィールページ
 */
export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-8 text-center text-4xl font-bold">プロフィール</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">アカウント</h2>
          <div className="mt-4 flex flex-col items-center rounded-lg border-2 p-4">
            <img
              className="w-40 h-40 rounded-full"
              src="https://picsum.photos/200"
              alt="Profile picture"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">
                Electrical and Electronic Information Engineering
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">あなたの履修状況</h2>
          <div className="mt-4 rounded-lg border-2 p-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">必修 (残り: 12 単位)</h3>
              <p className="text-lg">取得済み単位: 24 単位</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">限定選択 (残り: 6 単位)</h3>
              <p className="text-lg">取得済み単位: 18 単位</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">その他 (残り: 8 単位)</h3>
              <p className="text-lg">取得済み単位: 12 単位</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">必要単位数</h2>
          <p className="text-lg">総必要単位数: 60 単位</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
