/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScheduleNavigator from './src/navigator/ScheduleNavigator';
import BottomTab from './src/components/BottomTab';

function App(): JSX.Element {

  const tabs = [{
    name: 'Home',
    screen: ScheduleNavigator,
    iconOutline: require('./src/assets/icons/home_outline_48.png'),
    icon: require('./src/assets/icons/home_48.png')
  }, {
    name: 'Profile',
    screen: ScheduleNavigator,
    iconOutline: require('./src/assets/icons/stack_outline_48.png'),
    icon: require('./src/assets/icons/stack_48.png')
  }, {
    name: 'Home1',
    screen: ScheduleNavigator,
    iconOutline: require('./src/assets/icons/table_outline_48.png'),
    icon: require('./src/assets/icons/table_48.png')
  }, {
    name: 'Profile1',
    screen: ScheduleNavigator,
    iconOutline: require('./src/assets/icons/person_outline_48.png'),
    icon: require('./src/assets/icons/person_48.png')
  }]

  return (
    <NavigationContainer>
      <BottomTab tabs={tabs} />
    </NavigationContainer>
  )
}

export default App;
