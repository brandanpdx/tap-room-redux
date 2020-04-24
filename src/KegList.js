import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

KegList.propTypes = {
  kegList: PropTypes.array
}

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((element, index) =>
        <Keg name={element.name}
          brand={element.brand}
          price={element.price}
          ABV={element.ABV}
          quantity={element.quantity}
          key={index} />
      )}
    </React.Fragment>
  );
}



export default KegList; 


