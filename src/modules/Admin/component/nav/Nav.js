import React from 'react';
import NavBar from  '../../../../shared/component/nav/Nav';

const navLinks = [
  {
    label: 'Dashboard',
    path: '/admin',
  },
]

const Nav = () => {
  return <NavBar links={navLinks} />
}

export default Nav;