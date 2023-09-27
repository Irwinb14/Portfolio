import fitbot from '../projects/FitBot.png';
import choropleth from '../projects/choropleth.png';
import atocha from '../projects/Atocha.png';
import yardsale from '../projects/yardsale.png';
import APOD from '../projects/APOD.png';
import Image from 'next/image';
import Link from 'next/link';
import { FiLink2 } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import { FaReact, FaHtml5, FaCss3, FaCcStripe } from 'react-icons/fa';
import {
  SiRedux,
  SiOpenai,
  SiFirebase,
  SiTailwindcss,
  SiSequelize,
  SiNasa,
} from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
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

const Projects = () => {
  const isBreakPoint = useMediaQuery(600);

  return (
    <div className='projectsPageContainer'>
      <h1 className='projectsPageTitle'>My Projects</h1>
      <div className='projectsPageCard'>
        <Fade duration='2000'>
          <h1 className='projectTitle'>FitBot</h1>
          <div className='projectCard'>
            <p className='projectDescription'>
              FitBot is a web application that leverages AI to generate workouts
              based on customizable user input. Signed in users are able to save
              their generated workouts and track their progress on a user
              dashboard. When a user saves a workout, their dashboard will
              display a suggested next workout based on what they did in their
              previous session.
            </p>
            <div className='stackContainer'>
              <div className='stackIcon'>
                <DiJavascript size={isBreakPoint ? 25 : 30} />
                <p>Javascript</p>
              </div>
              <div className='stackIcon'>
                <FaHtml5 size={isBreakPoint ? 25 : 30} />
                <p>HTML5</p>
              </div>
              <div className='stackIcon'>
                <FaCss3 size={isBreakPoint ? 25 : 30} />
                <p>CSS</p>
              </div>
              <div className='stackIcon'>
                <FaReact size={isBreakPoint ? 25 : 30} />
                <p>React</p>
              </div>
              <div className='stackIcon'>
                <SiRedux size={isBreakPoint ? 25 : 30} />
                <p>Redux</p>
              </div>
              <div className='stackIcon'>
                <SiFirebase size={isBreakPoint ? 25 : 30} />
                <p>Firebase</p>
              </div>
              <div className='stackIcon'>
                <SiOpenai size={isBreakPoint ? 25 : 30} />
                <p>OpenAI</p>
              </div>
              <div className='stackIcon'>
                <SiTailwindcss size={isBreakPoint ? 25 : 30} />
                <p>TailwindCSS</p>
              </div>
            </div>
            <Image width={500} src={fitbot} alt='FitBot' />
            <div className='projectLinksDiv'>
              <Link href='https://www.fitbotapp.com/' target='_blank'>
                <FiLink2 size={40} className='hover:scale-110' />
              </Link>
              <Link
                href='https://github.com/orgs/Fitbot-App/repositories'
                target='_blank'
              >
                <BsGithub size={40} className='hover:scale-110' />
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <div className='projectsPageCard'>
        <Fade duration='2000'>
          <h1 className='projectTitle'>Atocha</h1>
          <div className='projectCard'>
            <p className='projectDescription'>
              Atocha is a cross-platform, AI-powered translation and language
              education app. Users submit either text or record audio to be
              translated into 8 different languages. For those looking to learn
              a new language, users can ask Atocha’s AI to teach them more about
              the grammar and vocabulary of the phrase. Atocha can also
              recommend responses to the provided phrases to allow users to
              continue the conversation.
            </p>
            <div className='stackContainer'>
              <div className='stackIcon'>
                <DiJavascript size={isBreakPoint ? 25 : 30} />
                <p>Javascript</p>
              </div>
              <div className='stackIcon'>
                <FaHtml5 size={isBreakPoint ? 25 : 30} />
                <p>HTML5</p>
              </div>
              <div className='stackIcon'>
                <FaCss3 size={isBreakPoint ? 25 : 30} />
                <p>CSS</p>
              </div>
              <div className='stackIcon'>
                <FaReact size={isBreakPoint ? 25 : 30} />
                <p>React Native</p>
              </div>
              <div className='stackIcon'>
                <SiRedux size={isBreakPoint ? 25 : 30} />
                <p>Redux</p>
              </div>
              <div className='stackIcon'>
                <SiFirebase size={isBreakPoint ? 25 : 30} />
                <p>Firebase</p>
              </div>
              <div className='stackIcon'>
                <SiOpenai size={isBreakPoint ? 25 : 30} />
                <p>OpenAI</p>
              </div>
              <div className='stackIcon'>
                <SiTailwindcss size={isBreakPoint ? 25 : 30} />
                <p>TailwindCSS</p>
              </div>
            </div>
            <Image width={300} src={atocha} alt='atocha' />
            <div className='projectLinksDiv'>
              <Link
                href='https://www.youtube.com/watch?v=TigcQqv85zk&list=PLx0iOsdUOUmkAw0zV4kJO8Ci80W5muK7R&index=8&t=2s'
                target='_blank'
              >
                <FiLink2 size={40} className='hover:scale-110' />
              </Link>
              <Link
                href='https://github.com/postico-gracehopper/atocha-client'
                target='_blank'
              >
                <BsGithub size={40} className='hover:scale-110' />
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <div className='projectsPageCard'>
        <Fade duration='2000'>
          <h1 className='projectTitle'>NASA APOD</h1>
          <div className='projectCard'>
            <p className='projectDescription'>
              For this project, I used NASA's Astronomy Picture Of the Day API
              to create a webpage that allows users to select a date and load
              the picture of the day for the respective date selected.
            </p>
            <div className='stackContainer'>
              <div className='stackIcon'>
                <DiJavascript size={isBreakPoint ? 25 : 30} />
                <p>Javascript</p>
              </div>
              <div className='stackIcon'>
                <FaReact size={isBreakPoint ? 25 : 30} />
                <p>React</p>
              </div>
              <div className='stackIcon'>
                <FaCss3 size={isBreakPoint ? 25 : 30} />
                <p>CSS</p>
              </div>
              <div className='stackIcon'>
                <FaHtml5 size={isBreakPoint ? 25 : 30} />
                <p>HTML5</p>
              </div>
              <div className='stackIcon'>
                <SiNasa size={isBreakPoint ? 25 : 30} />
                <p>NASA API</p>
              </div>
              <div className='stackIcon'>
                <TbBrandNextjs size={isBreakPoint ? 25 : 30} />
                <p>Next.js</p>
              </div>
            </div>
            <Image width={500} src={APOD} alt='APOD' />
            <div className='projectLinksDiv'>
              <Link
                href='https://nasa-api-irwinb14.vercel.app/'
                target='_blank'
              >
                <FiLink2 size={40} className='hover:scale-110' />
              </Link>
              <Link href='https://github.com/Irwinb14/nasa-api' target='_blank'>
                <BsGithub size={40} className='hover:scale-110' />
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <div className='projectsPageCard'>
        <Fade duration='2000'>
          <h1 className='projectTitle'>Covid-19 Choropleth Map</h1>
          <div className='projectCard'>
            <p className='projectDescription'>
              A Choropleth map that displays the number of positive Covid-19
              cases as a percentage of respective state population. I used D3JS
              to display data retrievd from the public API available at
              covidactnow.org.
            </p>
            <div className='stackContainer'>
              <div className='stackIcon'>
                <DiJavascript size={isBreakPoint ? 25 : 30} />
                <p>Javascript</p>
              </div>
              <div className='stackIcon'>
                <FaHtml5 size={isBreakPoint ? 25 : 30} />
                <p>HTML5</p>
              </div>
              <div className='stackIcon'>
                <FaCss3 size={isBreakPoint ? 25 : 30} />
                <p>CSS</p>
              </div>
              <div className='stackIcon'>
                <svg
                  height={isBreakPoint ? '25' : '32'}
                  viewBox='0 0 32 32'
                  width={isBreakPoint ? '25' : '32'}
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='m17.749 16c0-8.375-6.791-15.167-15.165-15.167h-2.584v6.667h2.584c4.697 0 8.499 3.807 8.499 8.5s-3.801 8.5-8.499 8.5h-2.584v6.667h2.584c8.375 0 15.165-6.792 15.165-15.167zm14.251-5.917c0-5.109-4.14-9.249-9.251-9.249h-10.667c2.625 1.645 4.777 3.943 6.245 6.667h4.421c1.428 0 2.584 1.156 2.584 2.583 0 1.428-1.156 2.584-2.584 2.584h-2.583c.417 2.203.417 4.464 0 6.667h2.583c1.423 0 2.584 1.156 2.584 2.584 0 1.432-1.156 2.588-2.584 2.588h-4.421c-1.468 2.724-3.62 5.021-6.245 6.667h10.667c2.163 0 4.256-.76 5.917-2.141 3.921-3.271 4.464-9.099 1.193-13.025 1.385-1.667 2.14-3.76 2.14-5.923z'
                    fill='#39b41ab5'
                  />
                </svg>
                <p>D3</p>
              </div>
            </div>
            <Image width={500} src={choropleth} alt='choropleth' />
            <div className='projectLinksDiv'>
              <Link
                href='https://irwinb14.github.io/Covid-Choropleth/'
                target='_blank'
              >
                <FiLink2 size={40} className='hover:scale-110' />
              </Link>
              <Link
                href='https://github.com/Irwinb14/Covid-Choropleth'
                target='_blank'
              >
                <BsGithub size={40} className='hover:scale-110' />
              </Link>
            </div>
          </div>
        </Fade>
      </div>
      <div className='projectsPageCard'>
        <Fade duration='2000'>
          <h1 className='projectTitle'>Yardsale</h1>
          <div className='projectCard'>
            <p className='projectDescription'>
              Yardsale is an e-commerce website designed for the sale of skis
              and ski gear. My team and I utilized Stripe checkout to handle
              online payments, Redux to handle shopping cart logic, React to
              build out product views, and Sequelize to manage product data.
            </p>
            <div className='stackContainer'>
              <div className='stackIcon'>
                <DiJavascript size={isBreakPoint ? 25 : 30} />
                <p>Javascript</p>
              </div>
              <div className='stackIcon'>
                <FaHtml5 size={isBreakPoint ? 25 : 30} />
                <p>HTML5</p>
              </div>
              <div className='stackIcon'>
                <FaCss3 size={isBreakPoint ? 25 : 30} />
                <p>CSS</p>
              </div>
              <div className='stackIcon'>
                <FaReact size={isBreakPoint ? 25 : 30} />
                <p>React Native</p>
              </div>
              <div className='stackIcon'>
                <SiRedux size={isBreakPoint ? 25 : 30} />
                <p>Redux</p>
              </div>
              <div className='stackIcon'>
                <SiSequelize size={isBreakPoint ? 25 : 30} />
                <p>Sequelize</p>
              </div>
              <div className='stackIcon'>
                <FaCcStripe size={isBreakPoint ? 25 : 30} />
                <p>Stripe</p>
              </div>
              <div className='stackIcon'>
                <SiTailwindcss size={isBreakPoint ? 25 : 30} />
                <p>TailwindCSS</p>
              </div>
            </div>
            <Image width={500} src={yardsale} alt='yardsale' />
            <div className='projectLinksDiv'>
              <Link
                href='https://skishop.onrender.com/products'
                target='_blank'
              >
                <FiLink2 size={40} className='hover:scale-110' />
              </Link>
              <Link
                href='https://github.com/postico-gracehopper/postico'
                target='_blank'
              >
                <BsGithub size={40} className='hover:scale-110' />
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
