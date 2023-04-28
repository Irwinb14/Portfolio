import { Slide } from 'react-awesome-reveal';
import { TbCrown } from 'react-icons/tb';
import { FaFlagUsa } from 'react-icons/fa';
import Image from 'next/image';
import navy from '../aboutImages/navy.webp';
import wesleyan from '../aboutImages/wesleyan.jpg';

const About = () => {
  return (
    <div className='aboutContainer'>
      <h1 className='aboutTitle'>My Story</h1>
      <div className='aboutDiv'>
        <div className='flex justify-center my-20 mb-40'>
          <hr class='divider'></hr>
          <h1 className='text-center text-seagreen mx-5 text-2xl flex flex-shrink'>
            Wesleyan University
          </h1>
          <hr className='divider'></hr>
        </div>
        <div className='aboutCard'>
          <Slide>
            <Image
              width={500}
              src={wesleyan}
              alt='wesleyan'
              className='border-2 border-rose-800'
            />
          </Slide>
          <Slide direction='right' className='description'>
            <div className='descriptiionCard'>
              <TbCrown size={60} />
              <p>
                In 2019, I graduated from Wesleyan University with a Bachelor of
                Arts in Psychology. While at Wesleyan, I was a member of the
                Men's Varsity Lacrosse team. In 2018 our team acheived one of my
                lifelong dreams - an NCAA National Championship.
              </p>
            </div>
          </Slide>
        </div>
        <div className='flex justify-center my-40 mb40'>
          <hr class='divider'></hr>
          <h1 className='text-center text-seagreen mx-5 text-2xl flex flex-shrink'>
            US Navy
          </h1>
          <hr className='divider'></hr>
        </div>
        <div className='aboutCard'>
          <Slide>
            <Image
              width={400}
              src={navy}
              alt='navy'
              className='border-2 border-blue-900'
            />
          </Slide>
          <Slide direction='right' className='description'>
            <div className='descriptiionCard'>
              <FaFlagUsa size={60} className='mb-5' />
              <p>
                In 2021, I joined the Navy as an officer. During my time in the
                Navy I learned countless lessons about leadership and found many
                opportunities to develop my work ethic. I also made some
                incredible friends along the way.
              </p>
            </div>
          </Slide>
        </div>
        <div className='flex justify-center my-40 mb40'>
          <hr class='divider'></hr>
          <h1 className='text-center text-seagreen mx-5 text-2xl flex flex-shrink'>
            Fullstack Academy
          </h1>
          <hr className='divider'></hr>
        </div>
      </div>
    </div>
  );
};

export default About;
