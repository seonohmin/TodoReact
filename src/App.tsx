import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';
import TodoProvider from './Todo/TodoProvider';


function App() { 
  return (
    <main className="App">
      <TodoProvider>
        <TodoHeader/>
        <TodoInput /> 
        {/* 이벤트 발생시 on, 받아서 처리하는 부분 handle */}
        <TodoListArea>
          <TodoListTools />
          <Divider/>
          <TodoList/>
        </TodoListArea>
      </TodoProvider>
    </main>
  );
}

export default App;
