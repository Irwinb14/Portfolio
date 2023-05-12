import { Slide, Fade } from 'react-awesome-reveal';
import { TbCrown } from 'react-icons/tb';
import { FaFlagUsa } from 'react-icons/fa';
import { TbMountain } from 'react-icons/tb';
import { RiComputerLine } from 'react-icons/ri';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import navy from '../aboutImages/navy.webp';
import wesleyan from '../aboutImages/wesleyan.jpg';
import idaho from '../aboutImages/idaho.jpeg';
import fullstack from '../aboutImages/fullstack.jpg';
import { isBot } from 'next/dist/server/web/spec-extension/user-agent';

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

const About = () => {
  const isBreakPoint = useMediaQuery(600);
  return (
    <div className='aboutContainer'>
      <h1 className='aboutTitle'>My Story</h1>
      <div>
        <div className='flex justify-center my-20 mb40'>
          <hr className='dividerAboutLong'></hr>
          <h1 className='text-center text-seagreen mx-4 text-2xl flex flex-shrink'>
            Wesleyan University
          </h1>
          <hr className='dividerAboutLong'></hr>
        </div>
        <div className='aboutCard'>
          {isBreakPoint ? (
            <>
              <Fade>
                <Image
                  width={300}
                  src={wesleyan}
                  alt='wesleyan'
                  className='border-2 border-rose-800'
                />
              </Fade>
              <Fade className='description'>
                <div className='descriptionCard'>
                  <TbCrown size={40} />
                  <p>
                    In 2019, I graduated from Wesleyan University with a
                    Bachelor of Arts in Psychology. While at Wesleyan, I was a
                    member of the Mens Varsity Lacrosse team. In 2018 our team
                    acheived one of my lifelong dreams - an NCAA National
                    Championship.
                  </p>
                </div>
              </Fade>
            </>
          ) : (
            <>
              <Slide>
                <Image
                  width={500}
                  src={wesleyan}
                  alt='wesleyan'
                  className='border-2 border-rose-800'
                />
              </Slide>
              <Slide direction='right' className='description'>
                <div className='descriptionCard'>
                  <TbCrown size={60} />
                  <p>
                    In 2019, I graduated from Wesleyan University with a
                    Bachelor of Arts in Psychology. While at Wesleyan, I was a
                    member of the Mens Varsity Lacrosse team. In 2018 our team
                    acheived one of my lifelong dreams - an NCAA National
                    Championship.
                  </p>
                </div>
              </Slide>
            </>
          )}
        </div>
        <div className='flex justify-center my-40 mb40'>
          <hr className='dividerAbout'></hr>
          <h1 className='text-center text-seagreen mx-5 text-2xl flex flex-shrink'>
            US Navy
          </h1>
          <hr className='dividerAbout'></hr>
        </div>
        <div className='aboutCard'>
          {isBreakPoint ? (
            <>
              <Fade>
                <Image
                  width={300}
                  src={navy}
                  alt='navy'
                  className='border-2 border-blue-900'
                />
              </Fade>
              <Fade className='description'>
                <div className='descriptionCard'>
                  <FaFlagUsa size={40} className='mb-5 mt-5' />
                  <p>
                    In 2021, I joined the Navy as an officer. During my time in
                    the Navy I learned countless lessons about leadership and
                    found many opportunities to develop my work ethic. I also
                    made some incredible friends along the way.
                  </p>
                </div>
              </Fade>
            </>
          ) : (
            <>
              <Slide>
                <Image
                  width={400}
                  src={navy}
                  alt='navy'
                  className='border-2 border-blue-900'
                />
              </Slide>
              <Slide direction='right' className='description'>
                <div className='descriptionCard'>
                  <FaFlagUsa size={60} className='mb-5 ' />
                  <p>
                    In 2021, I joined the Navy as an officer. During my time in
                    the Navy I learned countless lessons about leadership and
                    found many opportunities to develop my work ethic. I also
                    made some incredible friends along the way.
                  </p>
                </div>
              </Slide>
            </>
          )}
        </div>
        <div className='flex justify-center my-40 mb40'>
          <hr className='dividerAbout'></hr>
          <h1 className='text-center text-seagreen mx-5 text-2xl flex flex-shrink'>
            Travel
          </h1>
          <hr className='dividerAbout'></hr>
        </div>
        <div className='aboutCard'>
          {isBreakPoint ? (
            <>
              <Fade>
                <Image
                  width={300}
                  src={idaho}
                  alt='idaho'
                  className='border-2 border-yellow-500'
                />
              </Fade>
              <Fade className='description'>
                <div className='descriptionCard'>
                  <TbMountain size={40} className='mb-5 mt-5' />
                  <p>
                    After seperating from the Navy I spent my summer exploring
                    the West Coast with friends. During this time I hiked in Sun
                    Valley Idaho, swam in Lake Tahoe, and saw one of my favorite
                    bands play in Paso Robles.
                  </p>
                </div>
              </Fade>
            </>
          ) : (
            <>
              <Slide>
                <Image
                  width={400}
                  src={idaho}
                  alt='idaho'
                  className='border-2 border-yellow-500'
                />
              </Slide>
              <Slide direction='right' className='description'>
                <div className='descriptionCard'>
                  <TbMountain size={60} className='mb-5' />
                  <p>
                    After seperating from the Navy I spent my summer exploring
                    the West Coast with friends. During this time I hiked in Sun
                    Valley Idaho, swam in Lake Tahoe, and saw one of my favorite
                    bands play in Paso Robles.
                  </p>
                </div>
              </Slide>
            </>
          )}
        </div>
        <div className='flex justify-center my-40 mb40'>
          <hr className='dividerAboutLong'></hr>
          <h1 className='text-center text-seagreen mx-5 text-2xl flex flex-shrink'>
            Fullstack Academy
          </h1>
          <hr className='dividerAboutLong'></hr>
        </div>
        <div className='aboutCard'>
          {isBreakPoint ? (
            <>
              <Fade>
                <Image
                  width={300}
                  src={fullstack}
                  alt='fullstack'
                  className='border-2 border-black	'
                />
              </Fade>
              <Fade className='description'>
                <div className='descriptionCard'>
                  <RiComputerLine size={40} className='mb-5 mt-5' />
                  <p>
                    In November of 2022, I enrolled in Fullstack Academy's 14
                    week web development immersive. While at Fullstack Academy I
                    learned about back-end and front-end developement, pair
                    programmed with peers, and worked on several projects in a
                    team setting, including an e-commerce site and a text and
                    speech translation mobile app.
                  </p>
                </div>
              </Fade>
            </>
          ) : (
            <>
              <Slide>
                <Image
                  width={400}
                  src={fullstack}
                  alt='fullstack'
                  className='border-2 border-black	'
                />
              </Slide>
              <Slide direction='right' className='description'>
                <div className='descriptionCard'>
                  <RiComputerLine size={60} className='mb-5' />
                  <p>
                    In November of 2022, I enrolled in Fullstack Academy's 14
                    week web development immersive. While at Fullstack Academy I
                    learned about back-end and front-end developement, pair
                    programmed with peers, and worked on several projects in a
                    team setting, including an e-commerce site and a text and
                    speech translation mobile app.
                  </p>
                </div>
              </Slide>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
