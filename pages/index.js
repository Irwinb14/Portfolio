import fitbot from '../projects/FitBot.png';
import choropleth from '../projects/choropleth.png';
import atocha from '../projects/Atocha.png';
import yardsale from '../projects/yardsale.png';
import Image from 'next/image';
import Link from 'next/link';
import { Contrail_One } from 'next/font/google';
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState, useCallback } from 'react';

const contrail = Contrail_One({ weight: '400', subsets: ['latin'] });

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

export default function Home() {
  const isBreakPoint = useMediaQuery(600);
  return (
    <div className='homeContainer'>
      <div>
        <h1 className='homeTitle'>Bryan Irwin</h1>
        <h1 className='homeSubtitle'>Fullstack Developer</h1>
      </div>
      <div className='homeAboutContainer'>
        <Fade duration='2000' className='homeAboutText'>
          <p>
            Hello! My name is Bryan, and I have a passion for creating tools and
            applications that better the lives of others. I was born and raised
            in Long Island, NY, and am currently living in San Diego. Aside from
            coding, my passions include fitness, surfing, and listening to good
            music.
          </p>
        </Fade>
      </div>
      <div className='flex justify-center my-20 mb-5'>
        <hr className='divider'></hr>
        <h1 className='text-center text-seagreen mx-5 text-2xl flex flex-shrink'>
          Projects
        </h1>
        <hr className='divider'></hr>
      </div>
      <div className='projectsContainer'>
        <div className='projectCard'>
          <Link href='https://www.fitbotapp.com/' target='_blank'>
            <Image width={isBreakPoint ? 300 : 600} src={fitbot} alt='FitBot' />
          </Link>
        </div>
        <div className='projectCard'>
          <Link
            href='https://irwinb14.github.io/Covid-Choropleth/'
            target='_blank'
          >
            <Image
              width={isBreakPoint ? 300 : 600}
              src={choropleth}
              alt='choropleth'
            />
          </Link>
        </div>
        <div className='projectCard'>
          <Link
            href='https://github.com/postico-gracehopper/postico'
            target='_blank'
          >
            <Image
              width={isBreakPoint ? 300 : 600}
              src={yardsale}
              alt='yardsale'
            />
          </Link>
        </div>
        <div className='atochaProjectCard'>
          <Link
            href='https://www.youtube.com/watch?v=TigcQqv85zk&list=PLx0iOsdUOUmkAw0zV4kJO8Ci80W5muK7R&index=8&t=2s'
            target='_blank'
          >
            <Image
              width={isBreakPoint ? 200 : 300}
              src={atocha}
              alt='atocha'
              className='rounded-xl'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
