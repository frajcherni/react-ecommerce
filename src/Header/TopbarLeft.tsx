import React from 'react';
import { Col } from 'reactstrap';
import TopbarSlider from './TopbarSlider';

const TopbarLeft: React.FC = () => {
  return (
    <Col lg={6} xxl={4} className='d-lg-block d-none'>
      <TopbarSlider />
    </Col>
  );
};

export default TopbarLeft;
