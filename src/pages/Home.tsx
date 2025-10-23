import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h2 className="mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
        React 강의 목록
      </h2>
      <ul>
        <li>
          <Link to="/lecture/1" className="text-blue-500 hover:underline">
            1강: React 소개
          </Link>
        </li>
        {/* 앞으로 추가될 강의 목록 */}
      </ul>
    </div>
  );
};

export default Home;
