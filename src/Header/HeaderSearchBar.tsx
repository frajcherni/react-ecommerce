import React, { useState } from 'react';
import { Input, InputGroup } from 'reactstrap';
import Btn from '../Btn';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown';

const HeaderSearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const onHandleSearch = () => {
    const i18Lang = 'en'; // Hardcoded for simplicity
    if (searchValue) {
      navigate(`/${i18Lang}/search?search=${searchValue}`);
    } else {
      navigate(`/${i18Lang}/search`);
    }
  };

  return (
    <div className='middle-box'>
      <div className='location-box'>
        <CategoryDropdown />
      </div>
      <div className='search-box'>
        <InputGroup>
          <Input
            type='search'
            className='form-control'
            placeholder="I'm searching for..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Btn className='btn' type='button' id='button-addon2' onClick={onHandleSearch}>
            <RiSearchLine />
          </Btn>
        </InputGroup>
      </div>
    </div>
  );
};

export default HeaderSearchBar;
