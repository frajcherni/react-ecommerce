import React from 'react';

interface AvatarProps {
  data: { original_url: string } | null;
  placeHolder: string;
  name: string;
  customImageClass?: string;
  customClass?: string;
  height?: number;
  width?: number;
}

const Avatar: React.FC<AvatarProps> = ({ data, placeHolder, name, customImageClass, customClass, height, width }) => {
  return (
    <div className={customClass || ''}>
      <img
        src={data?.original_url || placeHolder}
        alt={name}
        height={height}
        width={width}
        className={customImageClass || ''}
      />
    </div>
  );
};

export default Avatar;
