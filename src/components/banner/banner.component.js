import React from 'react';
import { Link } from "gatsby";

import { GrGithub, GrLinkedin } from 'react-icons/gr';

import BannerAnimatedSvg from '../../assests/svg/animate-code-bubble-with-developer.svg';

import './banner.styles.scss';

const Banner = () => (
  <section className='hero is-medium'>
    <div className='hero-body'>
      <div className='columns'>
        <div className='column'>

          <div className='block'>
            <p className='is-family-secondary title has-text-white'>Hello!</p>
            <p className='is-family-secondary subtitle is-size-1 has-text-success'>
              My name is David
            </p>
          </div>

          <p className='mb-2'>
            I'm David. Sometimes called Dave. A self-taught React developer.
            Now enthusiastic for technologies base on Javascript
          </p>

          <div className='block'>
            <Link to='https://github.com/xDAVEx-ch' className='mr-2'>
              <GrGithub size='28px' />
            </Link>
            <Link to='https://www.linkedin.com/in/davechavarria/' className='mr-2'>
              <GrLinkedin size='28px' />
            </Link>
          </div>

          <Link to='#' className='button is-success is-outlined'>See portfolio</Link>

        </div>

        <div className='column'>

          <div className='banner-illustration level-img'>
            <BannerAnimatedSvg />
          </div>

        </div>
      </div>
      
    </div>
  </section>
);

export default Banner;