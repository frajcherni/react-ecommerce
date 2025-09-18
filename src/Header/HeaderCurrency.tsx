import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

interface CurrencyType {
  id: string;
  code: string;
  symbol: string;
  title: string;
}

const HeaderCurrency: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType | null>(null);
  const currencyState: CurrencyType[] = [
    { id: '1', code: 'USD', symbol: '$', title: 'US Dollar' },
    { id: '2', code: 'EUR', symbol: '€', title: 'Euro' },
    { id: '3', code: 'GBP', symbol: '£', title: 'Pound' },
  ];

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const getDefaultCurrency = JSON.parse(localStorage.getItem('selectedCurrency') || '{}');
    setSelectedCurrency(getDefaultCurrency || currencyState[0]);
  }, []);

  const handleClick = (value: CurrencyType) => {
    setSelectedCurrency(value);
    localStorage.setItem('selectedCurrency', JSON.stringify(value));
  };

  if (!currencyState.length) return null;
  return (
    <Dropdown className='theme-form-select' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className='select-dropdown' type='button'>
        <span>{selectedCurrency ? selectedCurrency.code : 'USD'}</span>
      </DropdownToggle>
      <DropdownMenu className='dropdown-menu-end sm-dropdown-menu'>
        {currencyState.map((elem) => (
          <DropdownItem id={elem.title} key={elem.id} onClick={() => handleClick(elem)}>
            {elem.symbol} {elem.code}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default HeaderCurrency;
