import React from 'react';
import { Button } from 'reactstrap';

interface BtnProps {
  loading?: boolean;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const Btn: React.FC<BtnProps> = (props) => {
  const { loading, title, children, ...rest } = props;

  return (
    <Button {...rest}>
      {loading ? (
        <div className={`d-flex position-relative${loading ? " spinning" : ""}`}>
          {children}
          {title}
        </div>
      ) : (
        <>
          {children}
          {title}
        </>
      )}
    </Button>
  );
};

export default Btn;