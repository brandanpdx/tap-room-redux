import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.ABV}</p>
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