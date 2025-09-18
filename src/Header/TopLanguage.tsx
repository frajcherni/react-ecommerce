
import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import English from '../assets/images/country/English.png';
import Arabic from '../assets/images/country/arabic.png';
import French from '../assets/images/country/French.png';
import Spanish from '../assets/images/country/Spanish.png';

interface LanguageType {
  id: number;
  title: string;
  icon: string;
  image: string;
  isLang: string;
}

const TopLanguage: React.FC = () => {
  const navigate = useNavigate();
  const pathName = location.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LanguageType>({
    id: 1,
    title: 'English',
    icon: 'en',
    image: English,
    isLang: '/en/',
  });

  const language: LanguageType[] = [
    { id: 1, title: 'English', icon: 'en', image: English, isLang: '/en/' },
    { id: 2, title: 'Arabic', icon: 'ar', image: Arabic, isLang: '/ar/' },
    { id: 3, title: 'French', icon: 'fr', image: French, isLang: '/fr/' },
    { id: 4, title: 'Spanish', icon: 'es', image: Spanish, isLang: '/es/' },
  ];

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const currentLang = language.find((lang) => pathName.includes(lang.isLang)) || language[0];
    setSelectedLang(currentLang);
  }, [pathName]);

  const handleChangeLang = (value: LanguageType) => {
    setSelectedLang(value);
    const splitPathname = pathName.includes(value.isLang) ? pathName.split(value.isLang)[1] : pathName;
    navigate(`/${value.icon}${splitPathname}`);
  };

  return (
    <Dropdown className='theme-form-select' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className='select-dropdown' type='button' id='select-language'>
        <img src={selectedLang.image} className='img-fluid' alt='Language Name' height={20} width={20} />
        <span>{selectedLang.title}</span>
      </DropdownToggle>
      <DropdownMenu className='dropdown-menu-end'>
        {language.map((elem) => (
          <div key={elem.id} onClick={() => handleChangeLang(elem)} style={{ cursor: 'pointer' }}>
            <DropdownItem id={elem.title}>
              <img src={elem.image} className='img-fluid' alt={elem.title} height={20} width={20} />
              <span>{elem.title}</span>
            </DropdownItem>
          </div>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default TopLanguage;
