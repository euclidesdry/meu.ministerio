import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import InicioScreen from '../screens/InicioScreen';
import PregacaoScreen from '../screens/PregacaoScreen';
import RelatoriosScreen from '../screens/RelatoriosScreen';
import SettingsScreen from '../screens/SettingsScreen';

const InicioStack = createStackNavigator({
  Home: InicioScreen,
});
 InicioStack.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-planet${focused ? '' : '-outline'}`
          : 'md-planet'
      }
    />
  ),
};

const PregacaoStack = createStackNavigator({
  Pregacao: PregacaoScreen,
});

PregacaoStack.navigationOptions = {
  tabBarLabel: 'Pregação',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-stopwatch' : 'md-stopwatch'}
    />
  ),
};

const RelatoriosStack = createStackNavigator({
  Relatorios: RelatoriosScreen,
});

RelatoriosStack.navigationOptions = {
  tabBarLabel: 'Relatórios',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-copy' : 'md-copy'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Configurações',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  InicioStack,
  PregacaoStack,
  RelatoriosStack,
  SettingsStack,
});
