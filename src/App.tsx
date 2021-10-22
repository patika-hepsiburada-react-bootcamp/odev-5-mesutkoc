import React,{useState} from 'react';
import './App.css';
import Main from "./components/Main"

function App() {
  const [name] = useState<string>('mesut');
  return (
    <div className="App">
     
        <Main name={name}></Main>
     
    </div>
  );
}

export default App;
