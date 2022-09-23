import React from 'react';
import './Intro.css';

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

const Intro = () => {
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span>Hi! I'm</span>
          <span>Donny</span>
          <span>
            Frontend Developer with high levels of experience in web design and
            development, producing Quality work
          </span>
        </div>
        <button className='button i-button'>Hire me</button>
        <div className='i-icons'>
          <a href=''>
            <img src={Github} alt='' />
          </a>
          <a href=''>
            <img src={LinkedIn} alt='' />
          </a>
          <a href=''>
            <img src={Instagram} alt='' />
          </a>
        </div>
      </div>
      <div className='i-right'>i am right side</div>
    </div>
  );
};

export default Intro;
