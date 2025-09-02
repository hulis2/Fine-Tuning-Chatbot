import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="h-screen flex justify-start items-start pt-20 font-sans">
      {!isLoggedIn ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            로그인
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md text-center w-80">
          <h2 className="text-2xl font-semibold mb-4">{email}님, 환영합니다!</h2>
          <button
            onClick={handleLogout}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}
