import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SlMenu } from 'react-icons/sl';
import Link from 'next/link';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SlMenu size={30} color={'#2E8B57'} className='m-3' />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href='/'>
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link href='/about'>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link href='/projects'>
          <MenuItem onClick={handleClose}>Projects</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
