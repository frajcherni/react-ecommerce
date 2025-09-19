import React, { useState } from 'react';
import { Col } from 'reactstrap';
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

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

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
          {/* Replace ReactStrap Dropdown with custom button */}
          <button 
            className='location-button dropdown-category' 
            onClick={toggleDropdown}
            onMouseEnter={() => setDropdownOpen(true)}
          >
            <RiAlignLeft className='me-2' />
            <span>All Categories</span>
          </button>

          {/* Custom dropdown with show/hide logic */}
          <div 
            className={`category-dropdown ${dropdownOpen ? 'show' : ''}`}
            onMouseLeave={closeDropdown}
          >
            <div className='category-title'>
              <h5>Categories</h5>
              <Btn type='button' className='p-0 close-button text-content' onClick={closeDropdown}>
                <RiCloseLine />
              </Btn>
            </div>
            <ul className='category-list'>
              {filteredCategories.map((elem) => (
                <li className='onhover-category-list' key={elem.id}>
                  <Link 
                    to={`/en/collections?category=${elem.slug}`} 
                    className='category-name'
                    onClick={closeDropdown}
                  >
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