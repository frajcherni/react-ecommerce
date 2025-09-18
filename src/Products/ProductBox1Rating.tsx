import React, { useState } from 'react';
import { RiStarFill, RiStarLine } from 'react-icons/ri';

interface ProductBox1RatingProps {
  classes?: {
    customClass?: string;
  };
  totalRating: number;
  clickAble?: boolean;
  setFieldValue?: (name: string, value: number) => void;
  name?: string;
}

const ProductBox1Rating: React.FC<ProductBox1RatingProps> = ({
  classes = {},
  totalRating,
  clickAble,
  setFieldValue,
  name,
}) => {
  const RatingStar = Array.from({ length: 5 }, (_, index) => index);
  const [rating, setRating] = useState(totalRating);

  const handleRate = (elem: number) => {
    setRating(elem);
    setFieldValue && name && setFieldValue(name, elem);
  };

  return (
    <>
      {clickAble ? (
        <ul className={`add-rating ${classes?.customClass || ''};`}>
          {RatingStar.map((elem, index) => (
            <li key={elem} onClick={() => handleRate(index + 1)}>
              {index + 1 <= rating ? <RiStarFill /> : <RiStarLine />}
            </li>
          ))}
        </ul>
      ) : (
        <ul className={`rating ${classes?.customClass || ''};`}>
          {RatingStar.map((elem) => (
            <li key={elem}>{elem + 1 <= totalRating ? <RiStarFill /> : <RiStarLine />}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductBox1Rating;