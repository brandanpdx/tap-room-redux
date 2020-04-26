import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  const kegStyles = {
    height: '200px',
    width: '200px',
    border: '1px solid black',
    borderRadius: '25px',
    padding: '5%',
  }

  return (
    <React.Fragment>
    <div>
      <div style={kegStyles}>
        <p>Name: {props.name}</p>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price}</p>
        <p>ABV: {props.ABV}%</p>
        <p>Quantity (Pints): {props.quantity}</p>
        <button onClick={()=> props.whenSellClicked(props.id)} type="submit">Sell</button>
        <button onClick={()=> props.whenRefillClicked(props.id)} type="submit">Refill</button> 
        <button onClick={() => props.whenKegClicked(props.id)} type="submit">View Details</button> 
      </div>
    </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ABV: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellClicked: PropTypes.func,
  whenRefillClicked: PropTypes.func
}

export default Keg; 