import React, { useEffect, useRef } from 'react';
import './Stepper.scss';
import { useInView } from 'framer-motion';

const Stepper = ({ steps }) => {
  const
    duration = 2 * 1000,
    stepperRef = useRef(null),
    isInView = useInView(stepperRef, {
      once: true,
      margin: "0px 100px -150px 0px"
    })

  return (
    <ul className="stepper" ref={stepperRef}>
      {steps.map((step, index) =>

        <li key={step.id} className="stepper-item">
          <StepperItem
            number={index + 1}
            title={step.title}
            desc={step.desc}
            duration={duration}
            delay={duration * index + 400}
            isLast={index + 1 === steps.length}
            isActive={isInView}
          />
        </li>

      )}
    </ul>
  )
}

export default Stepper;

const StepperItem = ({
  number,
  title,
  desc,
  duration,
  delay,
  isLast = false,
  isActive
}) => {
  const stepperItemRef = useRef(null);

  useEffect(() => {
    stepperItemRef.current.style.setProperty('--duration-progress', duration + 'ms')

    isActive && setTimeout(() => {
      stepperItemRef.current !== null &&
        stepperItemRef.current.classList.add('active')
    }, delay);
  }, [isActive])

  return (
    <div className={`stepper__item${isLast ? ' stepper__item-last' : ''}`} ref={stepperItemRef}>
      <div className="stepper__item-bullet-block">
        <div className="stepper__item-bullet">
          <span className="f-body-1 stepper__item-number">{number}</span>
        </div>

        {!isLast &&
          <div className="stepper__item-line">
            <div className="stepper__item-progress"></div>
          </div>
        }
      </div>

      <div className="stepper__item-content">
        <h3 className="f-h4 stepper__item-title">{title}</h3>
        <p className="f-body-2 stepper__item-desc">{desc}</p>
      </div>
    </div>
  )
}