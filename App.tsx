/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/components/BottomTab';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';

const tabs = [{
  name: 'Home',
  screen: Screen1,
  iconOutline: require('./src/assets/icons/home_outline_48.png'),
  icon: require('./src/assets/icons/home_48.png')
}, {
  name: 'Profile',
  screen: Screen2,
  iconOutline: require('./src/assets/icons/stack_outline_48.png'),
  icon: require('./src/assets/icons/stack_48.png')
}, {
  name: 'Home1',
  screen: Screen1,
  iconOutline: require('./src/assets/icons/table_outline_48.png'),
  icon: require('./src/assets/icons/table_48.png')
}, {
  name: 'Profile1',
  screen: Screen2,
  iconOutline: require('./src/assets/icons/person_outline_48.png'),
  icon: require('./src/assets/icons/person_48.png')
}]

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTab tabs={tabs} />
    </NavigationContainer>
  );
}

export default App;
