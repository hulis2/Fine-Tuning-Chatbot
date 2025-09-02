import { useState } from 'react';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // 할 일 추가 함수
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // 할 일 삭제 함수
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="h-screen flex justify-start items-start pt-20 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 나만의 투두리스트</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            추가
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
            >
              <span>{item}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-400 mt-4">할 일이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
