import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import CarList from './components/CarList'; 

const RootStack = createStackNavigator(
  {
    HomePage: HomePage,
    Contact: Contact,
    CarList: CarList
  }, 
  {
    initialRouteName: 'HomePage',
    headerMode: 'none'
  }
);

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}
