
import React from 'react';
import './App.css';
import Widget1 from './Components/API/Widget1';

import Widget3 from './Components/API/Widget3';
import Widget4 from './Components/API/Widget4';
// import Widget5 from './Components/API/Widget5';
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <Widget1 />

          <Widget4 />
        </div>

        <div className="column">
          <Widget3 />
        </div>
        {/* <Widget5 /> */}
      </div>

    </div>
  );
}

export default App;