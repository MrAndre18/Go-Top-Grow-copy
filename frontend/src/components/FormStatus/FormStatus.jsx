import React from 'react';
import './FormStatus.scss';
import { Check, PriorityHighOutlined } from '@mui/icons-material';

const FormStatus = ({
  error,
  title = error ?
    "An unforeseen error on our part" :
    "Thank you for your trust!",
  desc = error ?
    "We are currently working on a solution to this issue. Please try again in a few minutes. We apologize for any inconvenience this may have caused 😟" :
    "We have received your application and our expert will contact you soon ✅"
}) => {
  return (
    <div className='form-status'>
      <div className=
        {`form-status__img form-status__img${error ? '--error' : '--success'}`}
      >
        {error ?
          <PriorityHighOutlined /> :
          <Check />
        }
      </div>

      <div className="form-status__content">
        <p className="f-h3 form-status__title">{title}</p>
        <p className="f-body-1 form-status__desc">{desc}</p>
      </div>
    </div>
  )
}

export default FormStatus;