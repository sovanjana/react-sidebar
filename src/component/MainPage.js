import React from 'react';
import {
  Row
} from 'reactstrap';
import ToggleButton from './ToggleButton';
import SideBar from './SideBar';
import SideBarContent from './SideBarContent';
import './style.css';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    }
    this.handleViewSidebar = this.handleViewSidebar.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.setState({ sidebarOpen: false });
    }
  }

  handleViewSidebar() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    return(
      <React.Fragment>
        <Row className="main-page">
          <h1>Hello MainPage...</h1>
        </Row>
        <ToggleButton onClick={this.handleViewSidebar} />
        <SideBar isOpen={this.state.sidebarOpen} handleSidebar={this.handleViewSidebar}>
          <SideBarContent />
        </SideBar>
      </React.Fragment>
    );
  }
}