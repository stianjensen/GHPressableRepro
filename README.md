# GHPressableRepro

Minimal reproduction for: `Pressable` from `react-native-gesture-handler` does
not fire `onPress` when an absolute-positioned sibling `View` with
`pointerEvents="box-none"` is rendered on top of it. Core React Native
`Pressable` works correctly in the same layout.

Tested on Android, New Architecture. The simpler "parent View has
`pointerEvents="box-none"`" case appears to be fixed in 2.31.x; this overlay
variant is still broken.

## Versions

- `react-native` 0.83.3 (New Architecture, Hermes — defaults for this template)
- `react-native-gesture-handler` 2.31.1
- `react` 19.2.0
- Android (focus). iOS not the target of this report. Web is not affected.

## Run

```sh
npm install
# iOS (only if you want to test it there too)
cd ios && bundle install && bundle exec pod install && cd ..
npm run ios

# Android (primary target)
npm run android
```

## Layout

A container card holds two `Pressable` siblings (gesture-handler + core RN) and
an absolute-positioned `View` rendered last so it stacks on top, with
`pointerEvents="box-none"` and a faint red tint so it's visible. Per RN docs,
`box-none` means the view itself does not capture touches, but its children can,
and crucially touches should pass through to siblings underneath.

## What to look for

Tap each button repeatedly:

- **core RN Pressable** — counter increments. Touches pass through the overlay
  as expected.
- **gesture-handler Pressable** — counter does **not** increment. The overlay
  appears to absorb the touch despite `pointerEvents="box-none"`.

Remove the overlay `<View pointerEvents="box-none" .../>` and the
gesture-handler button starts working, confirming the overlay is the trigger.

The reproducer source is in `App.tsx`.
