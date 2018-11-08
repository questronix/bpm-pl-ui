import React from 'react';
import NavBar from  '../../../../shared/component/nav/Nav';

const navLinks = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'fa fa-tachometer-alt font-prulife',
    
  },
  {
    label: 'Tasks',
    path: '/tasks',
    icon: 'fa fa-clipboard-list font-bright-blue',
    active: 'true'
  },
]

const Nav = () => {
  return <NavBar links={navLinks} />
  
}

export default Nav;