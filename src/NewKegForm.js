import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types'; 

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      ABV: event.target.ABV.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }


  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='brand'
          placeholder='Beer Brand' />
        <input
          type='number'
          name='price'
          placeholder='Beer Price' />
        <input
          type='number'
          name='ABV'
          placeholder='ABV' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity (Pints)' />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}


NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm; 

