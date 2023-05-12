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
import { useEffect, useState, useCallback } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [width, updateTarget]);

  return targetReached;
};

const Footer = () => {
  const isBreakPoint = useMediaQuery(600);
  return (
    <div className='footer'>
      <div className='footerContent'>
        <div className='iconDiv'>
          <DiJavascript size={isBreakPoint ? 30 : 60} />
          <p>Javascript</p>
        </div>
        <div className='iconDiv'>
          <FaHtml5 size={isBreakPoint ? 30 : 60} />
          <p>HTML5</p>
        </div>
        <div className='iconDiv'>
          <FaCss3 size={isBreakPoint ? 30 : 60} />
          <p>CSS</p>
        </div>
        <div className='iconDiv'>
          <FaReact size={isBreakPoint ? 30 : 60} />
          <p>React</p>
        </div>
        <div className='iconDiv'>
          <SiRedux size={isBreakPoint ? 30 : 60} />
          <p>Redux</p>
        </div>
        <div className='iconDiv'>
          <DiPostgresql size={isBreakPoint ? 30 : 60} />
          <p>Postgresql</p>
        </div>
        <div className='iconDiv'>
          <SiFirebase size={isBreakPoint ? 30 : 60} />
          <p>Firebase</p>
        </div>
        <div className='iconDiv'>
          <SiOpenai size={isBreakPoint ? 30 : 60} />
          <p>OpenAI</p>
        </div>
        <div className='iconDiv'>
          <SiTailwindcss size={isBreakPoint ? 30 : 60} />
          <p>TailwindCSS</p>
        </div>
        <div className='iconDiv'>
          <SiSequelize size={isBreakPoint ? 30 : 60} />
          <p>Sequelize</p>
        </div>
        <div className='iconDiv'>
          <SiNextdotjs size={isBreakPoint ? 30 : 60} />
          <p>NextJs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
