import React from 'react';
import { ReactComponent as DropdownArrow } from '../../../assets/images/svg/drop-down.svg';
import Select, { components } from 'react-select';
import './Dropdown.scss';

const Dropdown = ({ itemsList }) => {

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <DropdownArrow />
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      options={itemsList}
      components={{ DropdownIndicator }}
      unstyled
      isSearchable={false}
      defaultValue={itemsList[0]}
      classNamePrefix='react-select'
    />
  );
};

export default Dropdown;