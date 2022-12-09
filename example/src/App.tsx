import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainNavigation from './navigation';
const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator headerMode={'none'} screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen key={'MAIN_SCREEN'} name={'MAIN_SCREEN'} component={MainNavigation} />
        </Stack.Navigator></NavigationContainer>
    </>
  );
}
