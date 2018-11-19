import React from 'react';
import NavBar from  '../../../../shared/component/nav/NavProcessor';

const navLinks = [
  {
    label: 'Dashboard',
    path: '/processor',
    icon: 'fa fa-tachometer-alt font-prulife',
  },
  {
    label: 'Task',  
    path: '/list',
    icon: 'fa fa-tachometer-alt font-prulife',
  },

]

const Nav = () => {
  return <NavBar links={navLinks} />
}

export default Nav;