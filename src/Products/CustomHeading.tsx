import React from 'react';

interface CustomHeadingProps {
  title: string;
  svgUrl?: string;
  subTitle?: string;
  customClass?: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ title, svgUrl, subTitle, customClass }) => {
  return (
    <div className={customClass || ' title'}>
      <h2>{title}</h2>
      {svgUrl && <img src={svgUrl} alt='Heading Icon' className='heading-icon' />}
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};

export default CustomHeading;