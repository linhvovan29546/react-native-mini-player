import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './mainTabs';



const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen key={'MAIN_HOME_STACK_NAVIGATOR'} name={'MAIN_HOME_STACK_NAVIGATOR'} component={MainTabs} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
