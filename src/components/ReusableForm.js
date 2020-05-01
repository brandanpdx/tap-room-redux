import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

  const formStyles = {
    width: '40vw',
    margin: 'auto auto',
    backgroundColor: 'transparent',
    padding: '5%',
    marginBottom: '2%'
  }

  return (
    <React.Fragment>
      <div style={formStyles}>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            placeholder='keg name' required />
          <input
            type='text'
            name='brand'
            placeholder='keg brand' required />
          <input
            type='text'
            name='price'
            placeholder='price' />
          <input
            type='number'
            name='ABV'
            placeholder='ABV' />
          <input
            type='number'
            name='quantity'
            placeholder='quantity' required />
          <button className="formButton" type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm; 