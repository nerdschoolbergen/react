import React from 'react';
import Summary from './Summary';
import TodoList from './TodoList';
import Todo from './Todo';
import './app.css';

const App = () => (
  <div className="app">
    <h1>My Todo App</h1>
    <Summary todosCount={5} completedTodosCount={3} />
    <TodoList todoItems={[
      new Todo(1, 'Wake up'),
      new Todo(2, 'Do the dishes'),
      new Todo(3, 'Fold clothes'),
      new Todo(4, 'Browse Reddit')
    ]} />
  </div>
);

export default App;
