import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  
  return (
    <div className="App">
      <span className="heading"> Tasks </span>
      <InputField todo={todo} setTodo={setTodo}></InputField>
    </div>
  );
}

export default App;
