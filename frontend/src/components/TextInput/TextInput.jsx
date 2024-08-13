import React from 'react';
import './TextInput.scss';
import { CloseRounded } from '@mui/icons-material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Slide } from '@mui/material';

const TextInput = ({ placeholder, value, setValue }) => {
  return (
    <div className="text-input">
      <input
        type="text"
        className='text-input__field'
        name={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={e => { setValue(e.target.value) }}
      />

      <div className="text-input__img">
        <Slide
          direction="down"
          in={value ? true : false}
        >
          <CloseRounded
            onClick={() => { setValue('') }}
            className="text-input__clear"
          />
        </Slide>

        <Slide
          direction="up"
          in={value ? false : true}
        >
          <SearchRoundedIcon className="text-input__img-search" />
        </Slide>
      </div>
    </div>
  );
};

export default TextInput;