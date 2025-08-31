import Counter from '../components/Counter';
import SayHello from '../components/SayHello';
import LoginButton from '../components/LoginButton';

export default function Home() {
  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>2주차 : State와 Hooks</h1>
      <hr />
      <Counter />
      <hr />
      <SayHello />
      <hr />
      <LoginButton />
    </main>
  );
}