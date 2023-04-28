import Zoom from 'react-reveal/Zoom';
import fitbot from '../projects/FitBot.png';
import choropleth from '../projects/choropleth.png';
import atocha from '../projects/atocha.png';
import Image from 'next/image';
import Link from 'next/link';
import { Contrail_One } from 'next/font/google';
import { Fade } from 'react-awesome-reveal';

const contrail = Contrail_One({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <div className='homeContainer'>
      <div>
        <h1 className='homeTitle'>Bryan Irwin</h1>
        <h1 className='homeSubtitle'>Fullstack Developer</h1>
      </div>
      <div className='homeAboutContainer'>
        <Fade duration='2000' className='homeAboutText'>
          <p>
            Hello! My name is Bryan, and I have a passion for creating tools
            that better the lives of people. I was born and raised in Long
            Island, NY, and am currently living in San Diego. Asside from
            coding, my passions include fitness, surfing, and listening to good
            music.
          </p>
        </Fade>
      </div>
      <div className='flex justify-center my-20 mb-5'>
        <hr class='divider'></hr>
        <h1 className='text-center text-seagreen mx-5 text-2xl flex flex-shrink'>
          Projects
        </h1>
        <hr className='divider'></hr>
      </div>
      <div className='projectsContainer'>
        <div className='projectCard'>
          <Link href='https://www.fitbotapp.com/' target='_blank'>
            <Image width={500} src={fitbot} alt='FitBot' />
          </Link>
        </div>
        <div className='projectCard'>
          <Link
            href='https://irwinb14.github.io/Covid-Choropleth/'
            target='_blank'
          >
            <Image width={550} src={choropleth} alt='choropleth' />
          </Link>
        </div>
        <div className='atochaProjectCard'>
          <Link
            href='https://www.youtube.com/watch?v=TigcQqv85zk&list=PLx0iOsdUOUmkAw0zV4kJO8Ci80W5muK7R&index=8&t=2s'
            target='_blank'
          >
            <Image
              width={300}
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
