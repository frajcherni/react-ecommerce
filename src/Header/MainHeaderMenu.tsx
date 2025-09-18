import React, { useState } from 'react';
import MenuList from './MenuList';
import { headerMenu } from './HeaderMenu';

const MainHeaderMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string[]>([]);

  return (
    <ul className='navbar-nav'>
      {headerMenu.map((menu, i) => (
        <MenuList menu={menu} key={i} customClass='nav-item dropdown' level={0} isOpen={isOpen} setIsOpen={setIsOpen} />
      ))}
    </ul>
  );
};

export default MainHeaderMenu;