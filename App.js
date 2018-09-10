import React from 'react';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import CarList from './components/CarList';

export default class App extends React.Component {

  render() {
    return (
      <CarList />
    );
  }
}