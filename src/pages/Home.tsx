import React from 'react';
import { Link } from 'react-router-dom';

// 강의 데이터 배열
const lectures = [
  {
    id: '1-1',
    title: 'State & Props 소개',
    path: '/lecture/1-1',
    category: '1. ContextAPI: Props 대체와 전역 데이터 관리',
  },
  {
    id: '1-2',
    title: 'Props Drilling 문제점',
    path: '/lecture/1-2',
    category: '1. ContextAPI: Props 대체와 전역 데이터 관리',
  },
  {
    id: '1-3',
    title: 'ContextAPI 기초',
    path: '/lecture/1-3',
    category: '1. ContextAPI: Props 대체와 전역 데이터 관리',
  },
  // { id: 3, title: '...', path: '/lecture/3', category: '...' },
];

// 카테고리별로 강의 그룹화
const groupedLectures = lectures.reduce(
  (acc, lecture) => {
    const { category } = lecture;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(lecture);
    return acc;
  },
  {} as Record<string, typeof lectures>,
);

const Home: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h2 className="mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">React 강의 목록</h2>
      {Object.entries(groupedLectures).map(([category, lecturesInCategory]) => (
        <div key={category} className="mb-4">
          <h3 className="text-xl font-semibold">{category}</h3>
          <ul className="ml-4 list-disc">
            {lecturesInCategory.map((lecture) => (
              <li key={lecture.id} className="mt-2">
                <Link to={lecture.path} className="text-blue-500 hover:underline">
                  {lecture.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
