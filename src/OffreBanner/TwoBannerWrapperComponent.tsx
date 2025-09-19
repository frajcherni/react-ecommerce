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
  colProps?: object;
  customCol?: boolean;
  [key: string]: any;
}

const WrapperComponent: React.FC<WrapperComponentProps> = ({
  classes = {},
  noRowCol = false,
  colProps = {},
  customCol = false,
  ...props
}) => {
  return (
    <section className={classes?.sectionClass ? `section-t-space ${classes.sectionClass}` : 'section-t-space'} {...props}>
      <div className={`container-fluid-lg ${classes?.fluidClass ? classes.fluidClass : ''}`}>
        {noRowCol ? (
          props.children
        ) : (
          <Row className={classes.row ? classes.row : ''}>
            {customCol ? (
              <>{props.children}</>
            ) : (
              <Col className={classes.col ? classes.col : ''} {...colProps}>
                {props.children}
              </Col>
            )}
          </Row>
        )}
      </div>
    </section>
  );
};

export default WrapperComponent;