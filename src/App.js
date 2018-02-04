import React from 'react';
import { Container } from 'reactstrap';
import MainPage from './component/MainPage';

export default class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <MainPage />
      </Container>
    );
  }
}
