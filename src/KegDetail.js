import React from "react";
import PropTypes from "prop-types";


function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h1>Name: {keg.name}</h1>
      <p>Brand: {keg.brand}</p>
      <p>Price: ${keg.price}</p>
      <p>ABV: {keg.ABV}%</p>
      <p>Quantity (Pints): {keg.quantity}</p>
      <button onClick={() => onClickingDelete(keg.id)}>Remove Keg</button>
      <button onClick={props.onClickingEdit}>Update Keg Details</button>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail; 