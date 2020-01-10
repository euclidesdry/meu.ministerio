import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { TabAddNewEventButton } from "../components/buttons/TabAddNewEventButton";
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-briefcase'} />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Relatórios',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Configurações',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
    focused={focused}
    name={'ios-cog'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},
{
  defaultNavigationOptions: ({
    navigation
  }) => {
    // ...
    const active = navigation.isFocused();
    const width = active ? 2 : 0; // This outputs 3 times, which are 2, 0, 0
    return {
      // ...
      initialRouteName: "HomeStack",
      tabBarOptions: {
        activeTintColor: '#F2A922',
        inactiveTintColor: '#444444',
        style: {
          elevation: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: '#efefef',
          borderTopColor: '#3d3',
          borderTopWidth: 0,
          height: 60,
          paddingHorizontal: 2,
          paddingVertical: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        //Estilização da fonte
        labelStyle: {
          fontSize: 16,
        },
        tabStyle: {
          paddingTop: 0,
          borderTopWidth: 0,
        }
      }
    };
  }
});

tabNavigator.path = '';

export default tabNavigator;
