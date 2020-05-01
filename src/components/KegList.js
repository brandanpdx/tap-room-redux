import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.kegList).map((keg) => {
        return <Keg 
          whenKegClicked = {props.onKegSelection}
          whenSellClicked = {props.onClickingSell}
          whenRefillClicked = {props.onClickingRefill}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          ABV={keg.ABV}
          quantity={keg.quantity}
          key={keg.id}
          id={keg.id} />
      })}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickingRefill: PropTypes.func,
};

export default KegList; 


