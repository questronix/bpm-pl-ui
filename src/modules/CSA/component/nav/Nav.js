import React from 'react';
import NavBar from  '../../../../shared/component/nav/Nav';

const navLinks = [
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    label: 'Tasks',
    path: '/tasks',
  },
]

const Nav = () => {
  return <NavBar links={navLinks} />
}

export default Nav;