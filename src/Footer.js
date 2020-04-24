import React from 'react';

function Footer() {

  const footerStyles = {
    backgroundColor: '#1A285A',
    width: '100%',
    color: '#f5f5f5',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2%',
    position: 'fixed',
    bottom: '0',
    left: '0'
  }

  return (
    <React.Fragment>
      <div style={footerStyles}>
        <h3>Tap<span className="merch">Room</span></h3>
        <h4> Project By: Brandan Sayarath</h4>
      </div>
    </React.Fragment>
  );
}

export default Footer; 