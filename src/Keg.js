import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.ABV}</p>
      <button type="submit">Sell</button>
      <button type="submit">Refill</button>
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  bran: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ABV: PropTypes.number.isRequired
}

export default Item; 