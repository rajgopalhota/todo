import TodoApp from "./TodoApp";
import { TodoProvider } from "./TodoContext";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
