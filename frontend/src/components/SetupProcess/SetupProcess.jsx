import React from 'react';
import './SetupProcess.scss';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Stepper from '../Stepper/Stepper';
import { setupProcess } from '../../utils/setupProcess';
import CircleDecor from '../UI/CircleDecor/CircleDecor';
import { useMediaQuery } from '@mui/material';

const SetupProcess = () => {
  const
    size_1024 = useMediaQuery('(max-width:1024px)'),
    size_768 = useMediaQuery('(max-width:768px)')

  return (
    <div className='process'>
      <SectionTitle>
        The&#160;<span className='section__title-text--gold'>process of&#160;business setup</span> in&#160;Dubai
      </SectionTitle>

      <p className="f-body-1 process__subtitle">
        The whole process can be completed in just one day! All you need to do is provide us with the necessary information about your company, and we will take care of the rest.
      </p>

      <div className="process__steps">
        <div className="process__steps-content" style={{ position: 'relative' }}>
          <CircleDecor
            color='dark-green'
            style={{
              width: size_768 ? 300 : size_1024 ? 400 : 500,
              right: 0,
              top: 0
            }}
            blur={size_768 ? 150 : 200}
          />

          <CircleDecor
            color='grey'
            blur={size_768 ? 200 : 250}
            style={{
              width: size_768 ? 300 : size_1024 ? 400 : 500,
              left: 0,
              bottom: 0
            }}
          />

          <Stepper steps={setupProcess} />
        </div>
      </div>
    </div>
  )
}

export default SetupProcess;