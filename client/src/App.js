import React from 'react'
import './App.css';
import AddStudent from './components/AddStudent';
import ListTodos from './components/ListTodos'

function App() {
  return (
    <div>
      <div className='container'>
        <AddStudent />
        <ListTodos />
      </div>
    </div>
  );
}

export default App;