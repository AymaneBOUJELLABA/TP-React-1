import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App()
{
  const [count,setCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => setCount(count+1)}>Push me</button> <span>:{count}</span>
        </div>
      </header>
    </div>
  );
}

export default App;
