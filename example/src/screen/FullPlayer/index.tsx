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
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Section } from '../Home';
const FullPlayer = (props: any) => {
  const { onClose } = props
  const renderAnimationClose = () => {
    return (
      <View style={{ flex: 1 }} >
        <TouchableOpacity>
          <Text style={{ color: 'white' }} onPress={onClose} >Close</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderPlaySong = () => {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View >
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="Step One">
              Edit <Text>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>

          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ flex: 1, marginTop: 50 }}>
              {renderAnimationClose()}
            </View>
            <View style={{}}>{renderPlaySong()}</View>
          </ScrollView>
        </View>

      </View>
    </>
  );
};


export default FullPlayer;
