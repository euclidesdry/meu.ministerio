import React from 'react';
import Icon from 'react-native-ico-miscellaneous';

import Colors from '../../constants/Colors';
// Nova linha de código
export default function AppIcon(props) {
  return (
    <Icon 
      name={props.name} 
      style = {{marginBottom: -2}}
      color = {props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
    <Text
  );
}
