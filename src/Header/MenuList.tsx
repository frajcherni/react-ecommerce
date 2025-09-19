import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

interface MenuItem {
  title: string;
  path?: string;
  params?: Record<string, string>;
  badge?: string;
  styleType?: 'image' | 'link';
  children?: MenuItem[];
  customChildren?: boolean;
  image?: string;
  column?: Array<{
    type: 'sub' | 'external_link' | string;
    title: string;
    path?: string;
    params?: Record<string, string>;
    colHeadClass?: string;
    label?: string;
    labelClass?: string;
  }>;
}

interface MenuListProps {
  menu: MenuItem;
  customClass?: string;
  anchorClass?: string;
  isOpen: string[];
  setIsOpen: (value: string[]) => void;
  level: number;
  onItemClick?: () => void;
}

const MenuList: React.FC<MenuListProps> = ({ menu, customClass, anchorClass, isOpen, setIsOpen, level, onItemClick }) => {
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const temp = isOpen.slice();
    temp[level] = menu.title !== temp[level] ? menu.title : '';
    setIsOpen(temp);
  };

  const hasChildren = menu.children && menu.children.length > 0;
  const hasStyleType = menu.styleType && ['image', 'link'].includes(menu.styleType);

  return (
    <li className={`${customClass || ''} ${menu.badge ? 'new-nav-item' : ''} ${hasChildren ? 'dropdown-mega' : ''}`}>
      {menu.path ? (
        <Link 
          className={anchorClass || 'nav-link dropdown-toggle'} 
          to={`/en${menu.path}`}
          onClick={onItemClick}
        >
          {menu.title}
        </Link>
      ) : (
        <a
          className={anchorClass || 'nav-link dropdown-toggle'}
          onClick={handleDropdownClick}
          style={{ cursor: hasChildren ? 'pointer' : 'default' }}
        >
          {menu.title}
          {menu.badge && <label className='new-dropdown'>{menu.badge}</label>}
        </a>
      )}

      {menu.styleType === 'image' && (
        <div className={`dropdown-menu dropdown-menu-2 dropdown-image ${isOpen[level] === menu.title ? 'show' : ''}`}>
          <div className='dropdown-column'>
            {menu.children?.map((data, i) => (
              <Link 
                className='dropdown-item' 
                to={`/en${data.path}`} 
                key={i}
                onClick={onItemClick}
              >
                <img src={data.image} className='img-fluid' alt={data.title} height={500} width={500} />
                <span>{data.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {menu.styleType === 'link' && (
        <div className={`dropdown-menu dropdown-menu-2 ${isOpen[level] === menu.title ? 'show' : ''}`}>
          <Row>
            {menu.children?.map((elem, i) => (
              <Col xl={3} className='dropdown-column' key={i}>
                {elem.column?.map((head, j) => (
                  <Fragment key={j}>
                    {head.type === 'sub' ? (
                      <h5 className={`dropdown-header ${head.colHeadClass || ''}`}>{head.title}</h5>
                    ) : head.type === 'external_link' ? (
                      <a className='dropdown-item' href={head.path} target='_blank' rel='noopener noreferrer'>
                        {head.title}
                        {head.label && <label className={`menu-label ${head.labelClass || ''}`}>{head.label}</label>}
                      </a>
                    ) : (
                      <Link 
                        className='dropdown-item' 
                        to={`/en${head.path}`}
                        onClick={onItemClick}
                      >
                        {head.title}
                        {head.label && <label className={`menu-label ${head.labelClass || ''}`}>{head.label}</label>}
                      </Link>
                    )}
                  </Fragment>
                ))}
              </Col>
            ))}
          </Row>
        </div>
      )}
      
      {/* Handle dropdowns without styleType (like Home) */}
      {hasChildren && !hasStyleType && !menu.customChildren && (
        <ul className={`dropdown-menu ${isOpen[level] === menu.title ? 'show' : ''}`}>
          {menu.children.map((childMenu, i) => (
            <MenuList
              menu={childMenu}
              key={i}
              anchorClass='dropdown-item'
              level={level + 1}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuList;