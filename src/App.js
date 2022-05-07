import React from 'react';
import Week from "./components/Week"
import ClockFunction from "./components/Clock/Clock.jsx"

import './App.css'

function App() {
  return(
    <div className="App">
      <ClockFunction/>
      <Week/>
    </div>
  );
}
export default App;
