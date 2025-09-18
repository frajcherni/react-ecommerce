import React from 'react';
import { Tooltip } from 'reactstrap';

interface ColorTooltipProps {
  target: string;
  title: string;
  tooltipOpen: boolean;
  toggle: () => void;
}

const ColorTooltip: React.FC<ColorTooltipProps> = ({ toggle, target, title, tooltipOpen }) => {
  return (
    <Tooltip placement='top' isOpen={tooltipOpen} target={target} toggle={toggle}>
      {title}
    </Tooltip>
  );
};

export default ColorTooltip;
