import { useState } from 'react';

export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      {isLoggedIn ? <p>환영합니다!</p> : <p>로그인이 필요합니다.</p>}
    </div>
  );
}