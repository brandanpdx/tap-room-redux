import React from 'react';
import Header from './Header.js';
import KegControl from './KegControl.js';
import Footer from './Footer.js';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="storeFront">
        <KegControl />
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
