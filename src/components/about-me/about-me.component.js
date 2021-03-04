import React from 'react';

import CodeTypingSvg from '../../assests/svg/code-typing.svg';

import './about-me.styles.scss';

const AboutMe = () => (
  <section className='container'>

    <div className='columns'>

      <div className='column'>
        <div className='code-typing-illustration level-img'>
          <CodeTypingSvg />
        </div>
      </div>

      <div className='column'>

        <div className='content'>
          <h2 className='is-family-secondary has-text-white is-2 title'>About Me</h2>
          <p>
            I am David, a self taught developer eager to explore the enviroment
            Javascript provides to the web comunity. Born as a visual learner, graphics, art and colors
            keep in love with Front-End technologies. Now, I'm looing forward to expanding my knowledge
            to the Back-End and mobile world, in order to create extensive apps, and give people
            a piece of what fascinate me more.
          </p>
        </div>

      </div>
    </div>

  </section>
);

export default AboutMe;