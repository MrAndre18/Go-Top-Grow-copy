import React, { useEffect, useRef, useState } from 'react';
import './Select.scss';
import { KeyboardArrowDown } from '@mui/icons-material';
import { SelectProvider, useOption, useSelect } from '@mui/base';
import { Collapse } from '@mui/material';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import { cutString } from '../../API/textMethods';


const renderSelectedValue = (value, options) => {
  const selectedOption = options.find((option) => option.id === value);

  return selectedOption ? cutString(selectedOption.name, 25) : null;
}

const CustomOption = props => {
  const { children, value, className, disabled = false } = props;
  const { getRootProps, highlighted } = useOption({
    value,
    disabled,
    label: children,
  });

  return (
    <li
      {...getRootProps()}
      className={className}
    >
      {children}
    </li>
  );
}

const CustomSelect = ({
  options,
  placeholder,
  setSelectedValue,
  defaultValue,
  className
}) => {
  const
    listboxRef = useRef(null),
    [listboxVisible, setListboxVisible] = useState(false),
    { getButtonProps, getListboxProps, contextValue, value } = useSelect({
      listboxRef,
      onOpenChange: setListboxVisible,
      open: listboxVisible,
      defaultValue: defaultValue
    }),

    // Scrollbar
    StickyMenuRef = useRef(),
    scrollOptions = {
      scrollbars: {
        autoHide: 'move',
        autoHideDelay: 1000,
        autoHideSuspend: true
      }
    },
    [initialize, instance] = useOverlayScrollbars({
      options: scrollOptions,
      events: {},
      defer: true
    })

  useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  useEffect(() => {
    initialize(StickyMenuRef.current);
  }, [initialize]);

  useEffect(() => {
    setSelectedValue(value)
  }, [value]);

  return (
    <div className={`select${listboxVisible ? ' active' : ''} ${className ? className : ''}`}>
      <button
        {...getButtonProps()}
        className="select-trigger"
      >
        {renderSelectedValue(value, options) || (
          <span className="select-placeholder">{placeholder ?? ' '}</span>
        )}

        <KeyboardArrowDown className="select-arrow" />
      </button>

      <ul
        {...getListboxProps()}
        aria-hidden={!listboxVisible}
        className='select-list'
      >
        <Collapse
          in={listboxVisible}
          timeout={400}
        >
          <div
            ref={StickyMenuRef}
            className="select-list__wrapper"
          >
            <SelectProvider value={contextValue}>
              {defaultValue ?
                <></>
                : <CustomOption
                  className=
                  {`select-option select-option__clear${value ? ' select-option__clear--visible' : ''}`}
                  value={null}
                >
                  Сбросить выбор
                </CustomOption>}

              {options.map((option) => {
                return (
                  <CustomOption
                    className={`select-option${value === option.id ? ' current' : ''}`}
                    key={option.id}
                    value={option.id}
                  >
                    {option.name}
                  </CustomOption>
                );
              })}
            </SelectProvider>
          </div>
        </Collapse>
      </ul>
    </div>
  );
};

export default CustomSelect;