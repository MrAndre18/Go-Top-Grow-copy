import React, { useRef, useState } from 'react';
import './AccordionOutlined.scss';

const AccordionOutlined = ({ items }) => {
  const [activeId, setActiveId] = useState(null)

  return (
    <ul className='accordion--outlined'>
      {items.map((item, id) =>
        <AccordionOutlinedItem
          key={id}
          number={id + 1}
          title={item.title}
          body={item.body}
          isActive={activeId === id}
          onClick={() => (id === activeId ? setActiveId(null) : setActiveId(id))}
        />
      )}
    </ul>
  )
}

export default AccordionOutlined;

const AccordionOutlinedItem = ({ number, title, body, isActive, onClick }) => {
  const bodyRef = useRef(null);

  return (
    <li
      className={`accordion--outlined__item ${isActive ? 'active' : ''}`}
    >
      <button
        className="accordion--outlined__item-trigger"
        onClick={() => onClick()}
      >
        <div className="accordion--outlined__item-text">
          <span className="f-body-2 accordion--outlined__item-number">
            {number}
          </span>
          <h3 className="f-h4 accordion--outlined__item-title">
            {title}
          </h3>
        </div>

        <div className="accordion--outlined__item-plus"><span /></div>
      </button>

      <div className="accordion--outlined__item-collapse"
        style={
          isActive ?
            { height: bodyRef.current.scrollHeight } :
            { height: "0px" }
        }
      >
        <div
          className="accordion--outlined__item-body"
          ref={bodyRef}
        >
          <div className="accordion--outlined__item-line" />
          <div className="accordion--outlined__item-content">
            {body}
          </div>
        </div>
      </div>
    </li>
  )
}