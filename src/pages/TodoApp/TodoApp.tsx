import * as React from 'react';
import InputField from './components/InputField';
import './TodoApp.css';

const TodoApp: React.FC = () => {
  return (
    <div id="todo-app">
      <div className="heading">Taskify</div>
      <InputField />
    </div>
  );
};

export default TodoApp;
