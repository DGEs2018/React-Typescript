import React from 'react';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text='hi there' person={{firstName: 'Dawit', lastName: 'Ghebre'}}></TextField>
    </div>
  );
}

export default App;
