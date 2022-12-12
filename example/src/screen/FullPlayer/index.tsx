/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';




const FullPlayer = (props: any) => {
  const { onClose } = props
  const renderAnimationClose = () => {
    return (
      <View style={{ flex: 1 }} >
        <TouchableOpacity onPress={onClose}>
          <Text style={{ color: 'white' }}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderPlaySong = () => {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View >
            <Text style={{
              color: 'white'
            }}
            >
              song name
            </Text>
            <Text
              // style={styles.description}
              numberOfLines={3}>
              song description
            </Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {renderAnimationClose()}
        </View>
        <ScrollView
          scrollEventThrottle={16}
          style={{ flex: 1, }}>
          <View style={{}}>{renderPlaySong()}</View>
        </ScrollView>
      </View>

    </SafeAreaView>
  );
};


export default FullPlayer;
