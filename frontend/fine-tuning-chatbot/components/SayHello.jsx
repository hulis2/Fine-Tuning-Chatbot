import { useState } from 'react';

export default function SayHello() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleInputChange}
      />
      <h1>안녕하세요, {name}님!</h1>
    </div>
  );
}