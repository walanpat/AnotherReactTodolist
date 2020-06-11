import React from 'react';
import logo from './logo.svg';
import Todolist from './TodoList.js';
import './App.css';

const x = new Todolist;
function App() {
  return (
    <div>
      <h1>TodoManager</h1>
      
          {x.render()}
     
     </div>
  );
}

export default App;
