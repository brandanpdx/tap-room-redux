import React from "react";
import PropTypes from "prop-types";


function KegDetail(props) {
  const { keg } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h1>{keg.name}</h1>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.ABV}</p>
      <p>{keg.quantity}</p>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail; 