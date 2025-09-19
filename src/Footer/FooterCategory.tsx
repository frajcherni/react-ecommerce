import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

interface FooterCategoryProps {
  footerMenu: string;
  setFooterMenu: (value: string) => void;
  categories: Array<{ id: number; name: string; slug: string }>;
  footerCategories: number[];
}

const FooterCategory: React.FC<FooterCategoryProps> = ({ footerMenu, setFooterMenu, categories, footerCategories }) => {
  return (
    <Col xl={2} lg={3} md={4} sm={6}>
      <div
        className={`footer-title ${footerMenu === 'category' ? 'show' : ''}`}
        onClick={() => setFooterMenu(footerMenu !== 'category' ? 'category' : '')}
      >
        <h4>Categories</h4>
      </div>
      <div className="footer-contain">
        <ul>
          {categories
            ?.filter((elem) => footerCategories.includes(elem.id))
            .map((result, i) => (
              <li key={i}>
                <Link to={`/en/collections?category=${result.slug}`} className="text-content">
                  {result.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Col>
  );
};

export default FooterCategory;