import React from 'react';
import './Benefits.scss';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import { benefits } from '../../utils/benefits';
import Card from '../Card/Card';

const Benefits = () => {
  return (
    <div className='benefits'>
      <SectionTitle>
        The&#160;<span className='section__title-text--gold'>benefits of&#160;partnering</span> with <span className='section__title-text--green'>Go&#160;Top&#160;Grow</span>
      </SectionTitle>

      <ul className="benefits__list">
        {benefits.map(item =>
          <li key={item.id} className="benefits__item">
            <Card
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          </li>
        )}
      </ul>
    </div>
  )
}

export default Benefits;