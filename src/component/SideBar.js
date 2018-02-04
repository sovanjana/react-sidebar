import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
        <div className={`${this.props.isOpen ? 'visible' : ''} overlay`}
          onClick={this.props.handleSidebar} />
        <div className={`${this.props.isOpen ? 'open' : ''} sidebar`}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
