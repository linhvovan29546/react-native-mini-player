import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  and,
  block,
  call,
  cond,
  eq,
  interpolate,
  set,
  useCode,
  greaterThan,
  divide,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import {
  onGestureEvent,
  snapPoint,
  timing,
  useValues,
} from "react-native-redash";
import { useMemoOne } from "use-memo-one";

export const { width, height, scale, fontScale } = Dimensions.get('window');

const EXPANDEDTARGET = height
const WrapDraggable = forwardRef((props: any, ref: any) => {
  const { goDown } = props
  const [
    translationY,
    velocityY,
    translateY,
    snapBack,
    state,
  ] = useValues<number>(0, 0, 0, 0, 0, State.UNDETERMINED);

  useImperativeHandle(ref, () => ({
    resetAnimationValue() {
      console.log('456')
      translationY?.setValue(0)
      velocityY?.setValue(0)
      translateY?.setValue(0)
      snapBack?.setValue(0)
      state?.setValue(State.UNDETERMINED)
    }
  }));
  // @ts-ignore
  const snapTo = snapPoint(translationY, velocityY, [0, height]);

  // @ts-ignore
  const gestureHandler = useMemoOne(
    () => onGestureEvent({ translationY, velocityY, state }),
    [state, translationY, velocityY]
  );
  // @ts-ignore
  const opacity = interpolate(translateY, {
    inputRange: [0, EXPANDEDTARGET * 2],
    outputRange: [1, 0],
  })
  useCode(
    () =>
      block([
        cond(
          // @ts-ignore
          and(eq(state, State.END), eq(snapTo, height), eq(snapBack, 0)),
          // @ts-ignore
          set(snapBack, 1),
          // set(toggle, greaterThan(height, translateY))
        ),
        cond(
          // @ts-ignore
          snapBack,
          call([], () => resetTranslate()),
          cond(
            // @ts-ignore
            eq(state, State.END),
            [
              set(
                // @ts-ignore
                translateY,
                timing({ from: translationY, to: 0, duration: 250 })
              ),

            ],
            // @ts-ignore
            [set(translateY, translationY)]
          )
        ),
      ]),
    []
  );

  const resetTranslate = () => {
    goDown()
  }

  return (
    <PanGestureHandler {...gestureHandler}>
      {/* @ts-ignore */}
      <Animated.View style={{
        flex: 1,
        opacity,
        transform: [{ translateY }],
      }}>
        {props.children}
      </Animated.View>
    </PanGestureHandler>
  )
})
export default WrapDraggable


