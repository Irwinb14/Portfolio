import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import HamburgerMenu from './hamburgerMenu';

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

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const isBreakPoint = useMediaQuery(600);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return isBreakPoint ? (
    <nav className={`${sticky ? 'sticky' : ''}`}>
      <div className='nav'>
        <div className='navIconDiv'>
          <Link href='https://www.linkedin.com/in/bryan-irwin/' target='_blank'>
            <BsLinkedin size={25} className='navIcon' />
          </Link>
          <Link href='https://github.com/Irwinb14' target='_blank'>
            <BsGithub size={25} className='navIcon' />
          </Link>
          <Link href='mailto:irwinb14@gmail.com'>
            <HiOutlineMail size={30} className='navIcon' />
          </Link>
        </div>
        <div>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  ) : (
    <nav className={`${sticky ? 'sticky' : ''}`}>
      <div className='nav'>
        <div className='navIconDiv'>
          <Link href='https://www.linkedin.com/in/bryan-irwin/' target='_blank'>
            <BsLinkedin size={30} className='navIcon' />
          </Link>
          <Link href='https://github.com/Irwinb14' target='_blank'>
            <BsGithub size={30} className='navIcon' />
          </Link>
          <Link href='mailto:irwinb14@gmail.com'>
            <HiOutlineMail size={35} className='navIcon' />
          </Link>
        </div>
        <div>
          <Link href='/' className='navItem'>
            Home
          </Link>
          <Link href='/about' className='navItem'>
            About{' '}
          </Link>
          <Link href='projects' className='navItem'>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
