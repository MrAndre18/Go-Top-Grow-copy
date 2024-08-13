import React, { useRef, useState } from 'react';
import './AccordionFilled.scss';

const AccordionFilled = ({ items }) => {
  const [activeId, setActiveId] = useState(null)

  return (
    <ul className='accordion--filled'>
      {items.map((item, id) =>
        <AccordionFilledItem
          key={id}
          title={item.title}
          body={item.body}
          isActive={activeId === id}
          onClick={() => (id === activeId ? setActiveId(null) : setActiveId(id))}
        />
      )}
    </ul>
  )
}

export default AccordionFilled;

const AccordionFilledItem = ({ title, body, isActive, onClick }) => {
  const bodyRef = useRef(null);

  return (
    <li
      className={`accordion--filled__item ${isActive ? 'active' : ''}`}
    >
      <button
        className="accordion--filled__item-trigger"
        onClick={() => onClick()}
      >
        <h3 className="f-h4 accordion--filled__item-title">
          {title}
        </h3>

        <div className="accordion--filled__item-plus"><span /></div>
      </button>

      <div className="accordion--filled__item-collapse"
        style={
          isActive ?
            { height: bodyRef.current.scrollHeight } :
            { height: "0px" }
        }
      >
        <div
          className="accordion--filled__item-body"
          ref={bodyRef}
        >
          <p className="f-body-2">{body}</p>
        </div>
      </div>
    </li>
  )
}