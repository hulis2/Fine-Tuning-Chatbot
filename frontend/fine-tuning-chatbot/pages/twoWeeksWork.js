import TodoList from '../components/TodoList';
import DigitalCounter from '../components/DigitalCounter';
import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden flex flex-col items-center p-10">
      <h2 className="text-2xl font-bold">2주차 : State와 Hooks</h2>
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        <DigitalCounter />
        <LoginForm />
        <TodoList />
      </div>
    </div>
  );
}