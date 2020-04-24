import React from 'react';
import { v4 } from 'uuid';

function NewKegForm() {
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='item name' />
        <input
          type='text'
          name='description'
          placeholder='item description' />
        <input
          type='number'
          name='quantity'
          placeholder='initial quatity' />
        <button type='submit'>add item</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm; 

