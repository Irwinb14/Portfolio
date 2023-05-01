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
          <DiJavascript size={60} />
          <p>Javascript</p>
        </div>
        <div className='iconDiv'>
          <FaHtml5 size={60} />
          <p>HTML5</p>
        </div>
        <div className='iconDiv'>
          <FaCss3 size={60} />
          <p>CSS</p>
        </div>
        <div className='iconDiv'>
          <FaReact size={60} />
          <p>React</p>
        </div>
        <div className='iconDiv'>
          <SiRedux size={60} />
          <p>Redux</p>
        </div>
        <div className='iconDiv'>
          <DiPostgresql size={60} />
          <p>Postgresql</p>
        </div>
        <div className='iconDiv'>
          <SiFirebase size={60} />
          <p>Firebase</p>
        </div>
        <div className='iconDiv'>
          <SiOpenai size={60} />
          <p>OpenAI</p>
        </div>
        <div className='iconDiv'>
          <SiTailwindcss size={60} />
          <p>TailwindCSS</p>
        </div>
        <div className='iconDiv'>
          <SiSequelize size={60} />
          <p>Sequelize</p>
        </div>
        <div className='iconDiv'>
          <SiNextdotjs size={60} />
          <p>NextJs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
