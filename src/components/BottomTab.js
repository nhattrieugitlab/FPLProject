import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTab = (props) => {
    const tabs = props.tabs;
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                    iconName = focused ? tabs[0].icon : tabs[0].iconOutline;
                    if (focused) return <Image source={iconName} style={{ width: size, height: size }} />
                } else if (route.name === 'Profile') {
                    iconName = focused ? tabs[1].icon : tabs[1].iconOutline;
                } else if (route.name === 'Home1') {
                    iconName = focused ? tabs[2].icon : tabs[2].iconOutline;
                } else if (route.name === 'Profile1') {
                    iconName = focused ? tabs[3].icon : tabs[3].iconOutline;
                }

                // Render the icon using Image component
                return <Image source={iconName} style={{ width: size, height: size }} />;
            },
        })}>
            {tabs.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.name} component={item.screen} />)
            })}
        </Tab.Navigator>
    )
}

export default BottomTab