import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeFlowScreens } from './initScreen';
import { MyTabBar } from './myTabBar';
import { ICON_DASHBOARD, ICON_LIBRARY, ICON_SEARCH } from '../constants/icons';
import {
  WrapPlayer
} from 'react-native-mini-player';
import Home from '../screen/Home';
import FullPlayer from '../screen/FullPlayer';
import MiniPlayer from '../screen/MiniPlayer';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HOME_SCREEN'}
    // screenOptions={screenOptions}
    >
      {Object.entries(HomeFlowScreens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SEARCH_SCREEN'}
    // screenOptions={screenOptions}
    >
      {Object.entries(HomeFlowScreens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

const LibraryStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'LIBRARY_SCREEN'}
    //  screenOptions={screenOptions}

    >
      {Object.entries(HomeFlowScreens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

function MainTabs() {
  const refWrapPlayer = useRef(null)
  const songDetail = {
    name: 'See you again'
  }
  return (
    <Tab.Navigator
      tabBar={props => (
        <WrapPlayer
          ref={refWrapPlayer}
          enableDraggable={false}
          renderMiniPlayer={() => {
            return <MiniPlayer songDetail={songDetail} />
          }}
          renderUiFullScreen={() => {
            return <FullPlayer onClose={() => {
              refWrapPlayer.current?.close()
            }} />
          }}
        >
          <MyTabBar {...props} />
        </WrapPlayer>
      )}
    >
      {BottomTab.map(({ title, component, iconTab }) => {

        return (
          <Tab.Screen
            key={title}
            name={title}
            component={component}
            initialParams={{ iconTab: iconTab, colorTitle: 'blue' }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
const BottomTab = [
  {
    title: 'HOME_STACK_NAVIGATOR',
    component: HomeStackNavigator,
    iconTab: ICON_DASHBOARD,
    colorTitle: 'blue',
  },
  {
    title: 'SEARCH_STACK_NAVIGATOR',
    component: SearchStackNavigator,
    iconTab: ICON_SEARCH,
    colorTitle: 'blue',
  },
  {
    title: 'LIBRARY_STACK_NAVIGATOR',
    component: LibraryStackNavigator,
    iconTab: ICON_LIBRARY,
    colorTitle: 'blue',
  },
];

export default MainTabs;
