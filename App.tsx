import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Pressable as RNPressable} from 'react-native';
import {
  GestureHandlerRootView,
  Pressable as GHPressable,
} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <View pointerEvents="box-none" style={styles.parent}>
        <GHPressable
          style={styles.button}
          onPress={() => Alert.alert('gesture-handler Pressable')}>
          <Text style={styles.text}>gesture-handler (broken)</Text>
        </GHPressable>

        <View style={styles.spacer} />

        <RNPressable
          style={styles.button}
          onPress={() => Alert.alert('core Pressable')}>
          <Text style={styles.text}>core RN (works)</Text>
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
