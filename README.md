# Workshop to build welcome/Registration Screen React Native

you can download and run app directly in your android mobile - https://github.com/jaythere/react-native-workshop/blob/develop/release/debug/app-debug.apk

# Setup instructions

## Clone the repo

`git clone https://github.com/jaythere/react-native-workshop.git`
`cd react-native-workshop`

## Install npm dependencies

Go to terminal & run
`yarn`;

## Start your app

Go to terminal & run
`npm run android`

## Run unit test cases

Go to terminal & run
`npm test`

## Preview

https://user-images.githubusercontent.com/8495058/173994430-a1a2d0ba-c298-40fe-9aed-17d9a3ec879c.mov

# Troubleshoot

## Could not connect to development server

To resolve this issue you can either run `adb reverse tcp:8081 tcp:8081` or kill process that running on 8081 port.
& if nothing works then reboot is the option 😉
