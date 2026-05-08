import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Pressable as RNPressable} from 'react-native';
import {
  GestureHandlerRootView,
  Pressable as GHPressable,
} from 'react-native-gesture-handler';

export default function App() {
  const [ghCount, setGhCount] = useState(0);
  const [rnCount, setRnCount] = useState(0);

  // Match the original LoginHome layout: an animated opacity on the overlay
  // (held at full visibility here so it stays observable).
  const opacity = useRef(new Animated.Value(0.18)).current;

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.card}>
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

        {/* Animated.View overlay (RN's Animated, not Reanimated) sitting on top
            with pointerEvents="box-none". This mirrors the original layout
            where the bug was observed. */}
        <Animated.View
          pointerEvents="box-none"
          style={[styles.overlay, {opacity}]}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  card: {padding: 24, borderWidth: 1, borderColor: '#888'},
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#4a90e2',
  },
  text: {color: 'white', fontWeight: '600'},
  spacer: {height: 16},
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    backgroundColor: 'rgb(255, 80, 80)',
  },
});
