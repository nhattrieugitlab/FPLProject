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
import HomeNavigator from './src/navigator/HomeNavigator';
import Profile from './src/screens/Profile';
import ScoreNavigator from './src/navigator/ScoreNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  const tabs = [{
    name: 'Trang chủ',
    screen: HomeNavigator,
    iconOutline: require('./src/assets/icons/home_outline_48.png'),
    icon: require('./src/assets/icons/home_48.png')
  }, {
    name: 'Lịch học',
    screen: ScheduleNavigator,
    iconOutline: require('./src/assets/icons/stack_outline_48.png'),
    icon: require('./src/assets/icons/stack_48.png')
  }, {
    name: 'Điểm',
    screen: ScoreNavigator,
    iconOutline: require('./src/assets/icons/table_outline_48.png'),
    icon: require('./src/assets/icons/table_48.png')
  }, {
    name: 'Tiện ích',
    screen: Profile,
    iconOutline: require('./src/assets/icons/person_outline_48.png'),
    icon: require('./src/assets/icons/person_48.png')
  }]

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home">
          {() => <BottomTab tabs={tabs} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
