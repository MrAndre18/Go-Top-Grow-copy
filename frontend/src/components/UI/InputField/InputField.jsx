import React from 'react';
import './InputField.scss';

const InputField = ({
  type,
  name,
  id,
  text,
  value = "",
  autocomplete,
  required = false
}) => {
  return (
    <div className="field">
      <input
        className='f-body-2 field__input'
        type={type}
        name={name}
        id={id}
        placeholder=""
        defaultValue={value}
        required={required}
        autoComplete={autocomplete}
      />
      <label className='f-body-2 field__label' htmlFor={id}>{text}</label>
    </div>
  )
}

export default InputField;