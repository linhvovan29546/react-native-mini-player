import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

const getNameByKey = (name: string) => {
  switch (name) {
    case 'HOME_STACK_NAVIGATOR':
      return 'Home';
    case 'SEARCH_STACK_NAVIGATOR':
      return 'Search';
    case 'LIBRARY_STACK_NAVIGATOR':
      return 'Library';
    default:
      return '';
  }
};

export const MyTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[{ flexDirection: 'row' }, styles.tabBarContainer]}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label = getNameByKey(route.name);
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          // eslint-disable-next-line react/jsx-key
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabBarBtn}
          >
            <Image source={route.params.iconTab} style={[styles.tabBarIcon, isFocused && { tintColor: 'red' }]} />
            <Text style={[styles.tabBarLabel, isFocused && { color: 'yellow' }]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
