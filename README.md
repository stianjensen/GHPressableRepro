# GHPressableRepro

Minimal reproduction for: `Pressable` from `react-native-gesture-handler` does not
fire `onPress` when wrapped in a parent `View` with `pointerEvents="box-none"`.
Core React Native `Pressable` works correctly under the same parent.

## Versions

- `react-native` 0.83.3 (New Architecture, Hermes — defaults for this template)
- `react-native-gesture-handler` 2.31.1
- `react` 19.2.0
- iOS / Android (web is unaffected, do not test there)

## Run

```sh
npm install
# iOS
cd ios && bundle install && bundle exec pod install && cd ..
npm run ios
# Android
npm run android
```

## What to look for

Two buttons render side by side inside a parent `View` with `pointerEvents="box-none"`:

1. **gesture-handler Pressable** — tapping it does **not** fire `onPress` (broken).
2. **core RN Pressable** — tapping it fires `onPress` and shows an `Alert` (works).

Removing `pointerEvents="box-none"` from the parent makes the gesture-handler
button start working, confirming the parent's `pointerEvents` is the trigger.

The reproducer source is in `App.tsx`.
