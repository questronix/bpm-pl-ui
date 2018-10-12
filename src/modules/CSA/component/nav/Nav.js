import React from 'react';
import NavBar from  '../../../../shared/component/nav/Nav';

const navLinks = [
  {
    label: 'Dashboard',
    path: '/csa',
  },
  {
    label: 'Tasks',
    path: '/csa/tasks',
  },
]

const Nav = () => {
  return <NavBar links={navLinks} />
}

export default Nav;