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

  const newKegFormStyles = {
    width: '40vw',
    margin: 'auto auto',
    backgroundColor: 'transparent',
    outline: 'none',
    boxShadow: 'none',
    padding: '5%',
    marginBottom: '2%'
  }


  return (
    <React.Fragment>
      <div style={newKegFormStyles}>
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
      </div>
    </React.Fragment>
  );
}


NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm; 

