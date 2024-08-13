import React, { useState } from 'react';
import './Accordion.scss';
import AccordionItem from './AccordionItem';

const Accordion = ({ items, title, pageLimit, page }) => {
  const [activeId, setActiveId] = useState(-1)

  return (
    <div className='accordion'>
      {title && <h3 className="accordion-title">{title}</h3>}

      {items && <ul className="accordion-body">
        {items.map((item, index) =>
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            isActive={activeId === item.id ? true : false}
            activeId={activeId}
            setActiveId={setActiveId}
            pageLimit={pageLimit}
            page={page}
          />
        )}
      </ul>}
    </div>
  );
};

export default Accordion;