import './App.css';
import TodoApp from './TodoApp';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <TodoProvider>
    <div className="App">
      <TodoApp/>
    </div>
    </TodoProvider>
  );
}

export default App;
