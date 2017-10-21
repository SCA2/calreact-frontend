import React from 'react';
import PropTypes from 'prop-types';

export const FormErrors = ({formErrors}) =>
  <div> {
    Object.keys(formErrors).map(formErrorKey => {
      return formErrors[formErrorKey].map(error => {
        return <p>{formErrorKey} {error}</p>
      })
    })
  } </div>

FormErrors.propTypes = {
  formErrors: PropTypes.object.isRequired
}