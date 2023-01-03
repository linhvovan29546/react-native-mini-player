
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';


type Styles = {
  tabBarLabel: TextStyle;
  tabBarIcon: ImageStyle;
  playerSheet: ViewStyle;
  tabBarContainer: ViewStyle;
  tabBarBtn: ViewStyle;
  iconMenu: ImageStyle;
  miniPlayer: ViewStyle;
  player: ViewStyle;
};
const TABBAR_HEIGHT = 80
export const styles: Styles = {
  tabBarContainer: {
    backgroundColor: 'blue',
    height: TABBAR_HEIGHT,
    borderTopWidth: 10,
    borderTopColor: 'transparent',
    elevation: 0,
    shadowColor: '#F4F4F4',
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 0,
  },
  tabBarLabel: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 3,
    fontSize: 12,
    lineHeight: 24,
    fontWeight: '500',
    color: 'red',
  },
  tabBarBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  tabBarIcon: {
    width: 25,
    height: 25,
    tintColor: 'red',
  },
  playerSheet: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'blue',
    bottom: 0,
  },
  iconMenu: {
    width: 24,
    height: 24,
  },
  miniPlayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: TABBAR_HEIGHT,
    height: 'auto',
  },
  player: {
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject,
  },
};
