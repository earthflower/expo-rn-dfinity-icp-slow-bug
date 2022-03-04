# React Native (Expo) app + DFINITY Canister iOS Device Performance Bug

Example React Native (in Expo) that shows the UI performance lock up on iOS Devices after making write calls to a canister. No issues with reads.

## Canister

Canister is already deployed on canister ID `s5ezz-7yaaa-aaaal-qalmq-cai`. So you can run on device without any localhost issues. Source code for canister is under `ic/Main.mo`

## Run iOS app on Simulator (no issues with performance)
```yarn ios```

## Run iOS app on Device (serious issues with performance after writes are made to canister)

Run Expo packager
```yarn start```

Download Expo Go app on iPhone device & once Expo dev tools appear in browser, scan QR code in app on device to test on device.

## Steps to replicate issue

1. Make sure you are running app on physical iOS device, does not happen on Simulator
1. Click "Run Query" button, click "Navigate" button, go back, click "Navigate" button, should notice no issue with performance, go back to Home screen
1. Click "Navigate", now click "Run Increment", go back, click "Navigate" button again, you should notice screen locks up
