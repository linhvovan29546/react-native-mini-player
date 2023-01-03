
import { useRef } from "react";
import Animated from "react-native-reanimated";
import { HEIGHT } from "./style";

const {
  cond,
  greaterThan
} = Animated;
const useAnimationHeader = () => {
  const offset = useRef(new Animated.Value(1)).current;

  const pointerEvents = cond(greaterThan(offset, HEIGHT * 0.4), 'none', 'auto');
  const opacity = cond(greaterThan(offset, HEIGHT * 0.4), 0, 1);
  // const opacity = interpolate(offset, {
  //   inputRange: [0, HEIGHT / 2],
  //   outputRange: [1, 0],
  //   extrapolate: Extrapolate.CLAMP
  // });

  const scrollHandler = Animated.event([
    { nativeEvent: { contentOffset: { y: offset } } },
  ]);

  return {
    scrollHandler,
    pointerEventHeader: pointerEvents,
    opacityHeader: opacity
  }
}
export default useAnimationHeader
