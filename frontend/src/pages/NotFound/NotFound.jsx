import React from 'react'
import { Helmet } from 'react-helmet';
import Btn from '../../components/UI/buttons/Btn/Btn';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';
import CircleDecor from '../../components/UI/CircleDecor/CircleDecor';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className='page not-found'>

      <Helmet>
        <title>Page not found | GoTopGrow</title>
        <meta name="description" content="Page not found | GoTopGrow" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1 style={{display: 'none'}}>Page not found | GoTopGrow</h1>

      <section className='content section not-found__body'>
        <div className="not-found__wrapper">

          <div className="not-found__404">
            <span className="not-found__number not-found__number--first">4</span>

            <div
              className="not-found__circles"
              style={{
                position: 'relative'
              }}
            >
              <CircleDecor
                color='black'
                blur={30}
                style={{
                  width: '550px',
                  left: '-10%',
                  top: '-20%'
                }}
              />
              <div className="not-found__circle"></div>
            </div>

            <span className="not-found__number not-found__number--last">4</span>
          </div>

          <div className="not-found__content">
            <p className="f-h2 not-found__title">Oops!</p>

            <p className="f-body-1 not-found__desc">The page you are looking for doesn’t exist or has been moved</p>

            <Btn
              text="Back to home"
              onClick={() => { navigate('/') }}
            />
          </div>

        </div>
      </section>


    </main>
  )
}

export default NotFound