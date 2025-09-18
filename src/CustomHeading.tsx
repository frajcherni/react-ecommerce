import React from 'react';

interface CustomHeadingProps {
  title: string;
  subTitle?: string;
  svgUrl?: string;
  customClass?: string;
  customTitleClass?: string;
  svgClass?: string;
  children?: React.ReactNode;
}

const CustomHeading: React.FC<CustomHeadingProps> = (props) => {
  const { title, subTitle, svgUrl, customClass, customTitleClass, svgClass = '', children } = props;

  return (
    <div className={`${customTitleClass ? customTitleClass : customClass ? customClass + ' ' : 'title'}`}>
      <div>
        <h2>{title}</h2>
        {svgUrl && <span className='title-leaf'>{svgUrl}</span>}
        {subTitle && <p>{subTitle}</p>}
      </div>
      {children && children}
    </div>
  );
};

export default CustomHeading;