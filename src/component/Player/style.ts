import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { colors } from '../../constant/var';
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
const widthImage = (WIDTH / 2 - 30);
export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    ((dimen.height === 780 || dimen.width === 780)
      || (dimen.height === 812 || dimen.width === 812)
      || (dimen.height === 844 || dimen.width === 844)
      || (dimen.height === 896 || dimen.width === 896)
      || (dimen.height === 926 || dimen.width === 926))
  );
}

export function ifIphoneX(iphoneXStyle: any, regularStyle: any) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}
export function getStatusBarHeight(safe: any) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}
// const POSITION_TOP = isIOS ? 30 : 20;
const SIZE_IMAGE = isIphoneX() || isAndroid ? 0.2 * HEIGHT : 150;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginHorizontal: 29,
  },
  containerHeader: {
    backgroundColor: colors.PRIMARY_COLOR,
    flexDirection: 'row',
    paddingTop: isIOS ? 9 : 6,
    paddingBottom: 15,
    paddingRight: 15,
  },
  contain: {},
  containerTitle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  headerLogo: {
    marginBottom: 0,
    marginLeft: 16,
  },
  viewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'blue',
    paddingTop: getStatusBarHeight('safe') + 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textHeader: {
    color: 'blue',
    alignSelf: 'flex-start',
    marginLeft: 15,
    fontSize: 18,
    paddingVertical: 10,
  },
  imageBackground: {
    width: widthImage,
    height: widthImage,
  },
  subTextPodCast: {
    fontSize: 18,
    marginTop: 10,
    maxWidth: widthImage * 0.7,
  },
  viewModalContainer: {
    // flex: 1,
    backgroundColor: 'blue',
    // paddingTop: 20,
    justifyContent: 'center',
  },
  listContainer: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  btnCross: {
    zIndex: 1,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 17,
    marginTop: 16,
    color: 'blue',
    fontWeight: '500',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageAudio: {
    width: WIDTH * 0.4,
    height: SIZE_IMAGE,
    alignSelf: 'center',
  },
  viewIndicator: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  description: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
  },
  containerTranscript: { marginBottom: 57, marginTop: 20 },
  titleTranscript: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 5,
  },
  subTranscript: { fontSize: 17, color: 'white', textAlign: 'left', },
  containerIconLibrary: {
    width: WIDTH * 0.5,
    marginTop: 28,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconLibrary: {
    width: 42,
    height: 42,
    tintColor: 'white',
  },
  containerIconSocial: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' },
  iconSocial: {
    width: 32,
    height: 32,
    marginHorizontal: 10,
    tintColor: 'white',
  },
  containerSubTranscript: {
    //todo update color
    backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerTextSize: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconChangeSize: {
    width: 28,
    height: 28,
    tintColor: 'white',
  },
  textChangeSize: {
    fontSize: 14,
  },
});
