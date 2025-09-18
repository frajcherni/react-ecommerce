import { useNavigate } from 'react-router-dom';
import { RiHeartLine } from 'react-icons/ri';
import Btn from '../Btn';

interface AddToWishlistProps {
  productObj: any;
  customClass?: string;
}

const AddToWishlist: React.FC<AddToWishlistProps> = ({ productObj, customClass }) => {
  const navigate = useNavigate();
  const i18Lang = 'en'; // Hardcoded language

  // Mock authentication check (replacing Cookies.get('uat'))
  const isAuthenticated = false; // Set to true for testing wishlist functionality

  const handleWishlist = () => {
    if (isAuthenticated) {
      // Add wishlist logic here (e.g., update state or call API)
      console.log(`Added ${productObj.name} to wishlist`);
    } else {
      navigate(`/${i18Lang}/auth/login`);
    }
  };

  return (
    <>
      {customClass ? (
        <Btn className={customClass} onClick={() => handleWishlist()}>
          <RiHeartLine />
        </Btn>
      ) : (
        <li title='Wishlist' onClick={() => handleWishlist()}>
          <a className='notifi-wishlist'>
            <RiHeartLine />
          </a>
        </li>
      )}
    </>
  );
};

export default AddToWishlist;
