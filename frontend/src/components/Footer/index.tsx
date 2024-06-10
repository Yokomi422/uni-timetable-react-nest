import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaSearch, FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 mt-8 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <nav className="flex justify-center space-x-12">
          <Link
            to="/timetable"
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaRegClock className="mr-2" />
            時間割
          </Link>
          <Link
            to="/class-search"
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaSearch className="mr-2" />
            授業検索
          </Link>
          <Link
            to="/profile"
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaUser className="mr-2" />
            プロフィール
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
