import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

const masterKegList = [
  {
    name: "Boulevard Unfiltered Wheat",
    brand: "Boulevard Brewing Company",
    price: 7,
    ABV: 4.4,
    quantity: 124
  },
  {
    name: "Miller High Life",
    brand: "Miller Brewing Company",
    price: 4,
    ABV: 4.6,
    quantity: 124
  },
  {
    name: "Coors Light",
    brand: "Coors Brewing Company",
    price: 4,
    ABV: 4.2,
    quantity: 124
  }
];

function KegList() {
  return (
    <React.Fragment>
      <hr />
      {masterKegList.map((element, index) =>
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