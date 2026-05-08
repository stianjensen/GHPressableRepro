import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Pressable as RNPressable} from 'react-native';
import {
  GestureHandlerRootView,
  Pressable as GHPressable,
} from 'react-native-gesture-handler';

export default function App() {
  const [ghCount, setGhCount] = useState(0);
  const [rnCount, setRnCount] = useState(0);

  return (
    <GestureHandlerRootView style={styles.root}>
      <View pointerEvents="box-none" style={styles.parent}>
        <GHPressable
          style={styles.button}
          onPress={() => setGhCount(c => c + 1)}>
          <Text style={styles.text}>gesture-handler: {ghCount}</Text>
        </GHPressable>

        <View style={styles.spacer} />

        <RNPressable
          style={styles.button}
          onPress={() => setRnCount(c => c + 1)}>
          <Text style={styles.text}>core RN: {rnCount}</Text>
        </RNPressable>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  parent: {padding: 24, borderWidth: 1, borderColor: '#888'},
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#4a90e2',
  },
  text: {color: 'white', fontWeight: '600'},
  spacer: {height: 16},
});
