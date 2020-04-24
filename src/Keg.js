import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: ${props.price}</p>
      <p>ABV: {props.ABV}%</p>
      <p>Quantity (Pints): {props.quantity}</p>
      <button type="submit">Sell</button>
      <button type="submit">Refill</button>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ABV: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Keg; 