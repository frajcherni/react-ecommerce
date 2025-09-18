import React, { useEffect, useRef } from 'react';

interface RatioImageProps {
  src: string;
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
}

const RatioImage: React.FC<RatioImageProps> = (props) => {
  const bgImg = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = bgImg.current;
    if (image && image.classList.contains('bg-img') && image.parentElement) {
      const parentElement = image.parentElement;
      const src = image.getAttribute('src');
      parentElement.classList.add('bg-size');
      image.style.display = 'none';
      parentElement.setAttribute(
        'style',
        `
        background-image: url(${src});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        ${props.style ? `height: ${props.style.height}; width: ${props.style.width};` : ''}
        `
      );
    }
  }, [props.src, props.style]);

  return <img ref={bgImg} {...props} />;
};

export default RatioImage;