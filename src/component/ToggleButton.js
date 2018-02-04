import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

const ToggleButton = (props) => {
  return (
    <Button onClick={props.onClick} className="toggle-button">
      Toggle Sidebar
    </Button>
  );
}

export default ToggleButton;
