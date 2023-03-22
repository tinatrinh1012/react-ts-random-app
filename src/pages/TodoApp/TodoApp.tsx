import * as React from 'react';
import { useState } from 'react';
import TodoList from '../TodoApp/components/TodoList';
import { Todo } from '../TodoApp/model';
import InputField from './components/InputField';
import './TodoApp.css';

const TodoApp: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };

  return (
    <div id="todo-app">
      <div className="heading">Taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
