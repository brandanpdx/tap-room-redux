import React from 'react';
import Header from './Header.js';
import KegControl from './KegControl.js';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="storeFront">
        <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
