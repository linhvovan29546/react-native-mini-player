- Required react-native-reanimated v2
- Required react-native-redash support reanimated v2
- Required react-native-gesture-handler v2
# Screenshot   
<video src="https://user-images.githubusercontent.com/84692183/207228247-c3466563-f2b9-4f65-a55b-27a3859f0594.mp4"></video>
## Installation

```sh
npm install react-native-redash react-native-reanimated react-native-gesture-handler
npm install react-native-mini-player

```

## Usage

```js
import { WrapPlayer} from 'react-native-mini-player';
```

#### Example uses
```javascript
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
```
### Props

| Prop name        | Type             | Default value                          | Description                                                                                                                                                                                                    |
| ---------------- | ---------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| renderMiniPlayer | JSX.Element| null | Required to render mini player component |
| renderUiFullScreen |  JSX.Element| null | Required to render full screen UI component. |
| hide        | boolean         | false       | Flag to hide mini player                                                                                                                                |
| tabBarHeight  | number           | 80                 | The height of bottom tab                                                                                                        |
| miniPlayerHeight | number | 80 | The maximum height of mini player |
| containerMiniPlayer| ViewStyle| null| Style of container mini player|


### Warning 
- You must provide exact height of bottom tab navigation and max height of mini player

### Method

| Method name        | Type             | Default value                          | Description                                                                                                                                                                                                    |
| ---------------- | ---------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| open | Function| null | Function to open full screen player|
| close |  Function| null |Function to close full screen player |
### Known issue
- Android cannot run example 
### Todo feature
- TODO feat: update to react-native-reanimated v2


