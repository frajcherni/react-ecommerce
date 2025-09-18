import React, { useState } from 'react';
import { Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Btn from '../Btn';
import { Link } from 'react-router-dom';
import Avatar from './common_Avatar';
import ClassicHeaderMenu from './ClassicHeaderMenu';
import { RiAlignLeft, RiCloseLine } from 'react-icons/ri';
import { placeHolderImage } from './CommonPath';

interface CategoryType {
  id: string;
  slug: string;
  name: string;
  category_icon: {
    original_url: string;
  };
}

const HeaderCategory: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const categories: CategoryType[] = [
    { id: '1', slug: 'vegetables', name: 'Vegetables', category_icon: { original_url: '/assets/images/category/vegetables.png' } },
    { id: '2', slug: 'fruits', name: 'Fruits', category_icon: { original_url: '/assets/images/category/fruits.png' } },
    { id: '3', slug: 'dairy', name: 'Dairy', category_icon: { original_url: '/assets/images/category/dairy.png' } },
  ];

  // Hardcoded filtered categories (simulating themeOption.header.category_ids)
  const filteredCategories = categories.filter((elem) => ['1', '2', '3'].includes(elem.id));

  return (
    <Col xs={12}>
      <div className='header-nav'>
        <div className='header-nav-left'>
          <Dropdown className='location-dropdown' isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className='location-button dropdown-category' caret>
              <RiAlignLeft className='me-2' />
              <span>All Categories</span>
            </DropdownToggle>
            <DropdownMenu>
              {filteredCategories.map((elem) => (
                <DropdownItem key={elem.id}>
                  <Link to={`/en/collections?category=${elem.slug}`} className='category-name'>
                    <Avatar
                      data={elem.category_icon}
                      placeHolder={placeHolderImage}
                      name={elem.name}
                    />
                    <span>{elem.name}</span>
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <div className='category-dropdown'>
            <div className='category-title'>
              <h5>Categories</h5>
              <Btn type='button' className='p-0 close-button text-content'>
                <RiCloseLine />
              </Btn>
            </div>
            <ul className='category-list'>
              {filteredCategories.map((elem) => (
                <li className='onhover-category-list' key={elem.id}>
                  <Link to={`/en/collections?category=${elem.slug}`} className='category-name'>
                    <Avatar
                      data={elem.category_icon}
                      placeHolder={placeHolderImage}
                      name={elem.name}
                    />
                    <h6>{elem.name}</h6>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ClassicHeaderMenu />
      </div>
    </Col>
  );
};

export default HeaderCategory;
