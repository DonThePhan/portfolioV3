import React from 'react';
import './Services.css';
import heartEmoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';

const Services = () => {
  return (
    <div className='services'>
      {/* left side */}
      <div className='awesome'>
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Magnam eligendi sed facilis nemo odit alias dicta at distinctio
          voluptates hic dignissimos ipsa magni, quasi eaque, ullam harum
          tenetur doloremque obcaecati.
        </span>
        <a href={Resume}>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{ background: '#abf1ff94' }}></div>
      </div>
      {/* right side */}
      <div className='cards'>
        <div
          style={{
            left: '14rem',
          }}
        >
          <Card
            emoji={heartEmoji}
            heading='Design'
            detail='Figma, Sketch, Photoshop, Adobe, Adobe xd'
          ></Card>
        </div>
        <div
          style={{
            top: '12rem',
            left: '-4rem',
          }}
        >
          <Card
            emoji={glasses}
            heading='Developer'
            detail='HTML, CSS, JavaScript, React'
          ></Card>
        </div>
        <div
          style={{
            top: '19rem',
            left: '12rem',
          }}
        >
          <Card
            emoji={humble}
            heading='UI/UX'
            detail='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, porro.'
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
