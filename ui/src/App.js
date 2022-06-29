import React, {Fragment} from 'react';
import './App.css';
import ListTodos from './Components/ListTodos';
import InputTodo from './Components/InputTodo';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
