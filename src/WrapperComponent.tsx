import React from 'react';
import { Col, Row } from 'reactstrap';

interface WrapperComponentProps {
  classes?: {
    sectionClass?: string;
    fluidClass?: string;
    row?: string;
    col?: string;
  };
  noRowCol?: boolean;
  colProps?: Record<string, any>;
  customCol?: boolean;
  children: React.ReactNode;
}

const WrapperComponent: React.FC<WrapperComponentProps> = ({
  classes = {},
  noRowCol = false,
  colProps = {},
  customCol = false,
  children,
  ...props
}) => {
  
  return (
    <section className={classes.sectionClass ? `section-t-space ${classes.sectionClass}` : 'section-t-space'} {...props}>
      <div className={classes.fluidClass || 'container-fluid-lg'}>
        {noRowCol ? (
          children
        ) : (
          <Row className={classes.row || ''}>
            {customCol ? (
              <>{children}</>
            ) : (
              <Col className={classes.col || 'col-12'} {...colProps}>
                {children}
              </Col>
            )}
          </Row>
        )}
      </div>
    </section>
  );
};

export default WrapperComponent;
