import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
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
