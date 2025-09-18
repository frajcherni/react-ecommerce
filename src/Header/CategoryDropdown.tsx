import React from 'react';
import Btn from '../Btn';

interface CategoryType {
  id: string;
  name: string;
}

const CategoryDropdown: React.FC = () => {
  const categoryData: CategoryType[] = [
    { id: '1', name: 'Vegetables' },
    { id: '2', name: 'Fruits' },
    { id: '3', name: 'Dairy' },
  ];

  return (
    <Btn className='location-button'>
      <select className='form-select locat-name'>
        <option>All Categories</option>
        {categoryData.map((category, i) => (
          <option key={i}>{category.name}</option>
        ))}
      </select>
    </Btn>
  );
};

export default CategoryDropdown;