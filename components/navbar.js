import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    </nav>
  );
};

export default Navbar;
