import React from 'react';
import NavBar from  '../../../../shared/component/nav/Nav';

const navLinks = [
  {
    label: 'Dashboard',
    path: '/admin',
    icon: 'fa fa-tachometer-alt font-prulife',
  },
]

const Nav = () => {
  return <NavBar links={navLinks} />
}

export default Nav;