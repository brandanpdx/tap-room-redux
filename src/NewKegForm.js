import React from 'react';
import { v4 } from 'uuid';


function handleNewKegFormSubmission(event) {
  event.preventDefault();
  console.log(event.target.name.value);
  console.log(event.target.description.value);
  console.log(event.target.quantity.value);
}

function NewKegForm() {
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



export default NewKegForm; 

