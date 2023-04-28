import React from 'react';
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import {
  SiRedux,
  SiOpenai,
  SiFirebase,
  SiTailwindcss,
  SiSequelize,
  SiNextdotjs,
} from 'react-icons/si';
import { DiJavascript, DiPostgresql } from 'react-icons/di';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <div className='iconDiv'>
          <DiJavascript size={60} className='glow' />
          <p>Javascript</p>
        </div>
        <div className='iconDiv'>
          <FaHtml5 size={60} className='glow' />
          <p>HTML5</p>
        </div>
        <div className='iconDiv'>
          <FaCss3 size={60} className='glow' />
          <p>CSS</p>
        </div>
        <div className='iconDiv'>
          <FaReact size={60} className='glow' />
          <p>React</p>
        </div>
        <div className='iconDiv'>
          <SiRedux size={60} className='glow' />
          <p>Redux</p>
        </div>
        <div className='iconDiv'>
          <DiPostgresql size={60} className='glow' />
          <p>Postgresql</p>
        </div>
        <div className='iconDiv'>
          <SiFirebase size={60} className='glow' />
          <p>Firebase</p>
        </div>
        <div className='iconDiv'>
          <SiOpenai size={60} className='glow' />
          <p>OpenAI</p>
        </div>
        <div className='iconDiv'>
          <SiTailwindcss size={60} className='glow' />
          <p>TailwindCSS</p>
        </div>
        <div className='iconDiv'>
          <SiSequelize size={60} className='glow' />
          <p>Sequelize</p>
        </div>
        <div className='endIcon'>
          <SiNextdotjs size={60} className='glow' />
          <p>NextJs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
