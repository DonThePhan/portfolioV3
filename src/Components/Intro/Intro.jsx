import React from 'react';
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbsup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

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
            <img src={github} alt='' />
          </a>
          <a href=''>
            <img src={linkedin} alt='' />
          </a>
          <a href=''>
            <img src={instagram} alt='' />
          </a>
        </div>
      </div>
      <div className='i-right'>
        <img src={vector1} alt='' />
        <img src={vector2} alt='' />
        <img src={boy} alt='' />
        <img src={glassesimoji} alt='' />
        <div style={{ top: '-4%', left: '68%' }}>
          <FloatingDiv image={crown} txt1='Web' txt2='Developer'></FloatingDiv>
        </div>
        <div style={{ top: '18rem', left: '0rem' }}>
          <FloatingDiv
            image={thumbsup}
            txt1='Best Design'
            txt2='Award'
          ></FloatingDiv>
        </div>
      </div>
    </div>
  );
};

export default Intro;
