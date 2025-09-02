import { useState } from 'react';

export default function DigitalCounter() {
  
  const [count, setCount] = useState(0);
  
  return (
    <div className="h-screen flex justify-start items-start pt-20 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <p className="text-2xl font-semibold mb-6">현재 숫자: {count}</p>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            증가
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            감소
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}