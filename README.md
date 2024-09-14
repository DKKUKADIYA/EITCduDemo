## Application Details:

**Screen1:**

Form contains two text fields: one is email and other one is password
Email must be valid email address
Password size limitation between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)
Submit button to be enabled only in case of email & password are valid otherwise it will be disabled
Once Submit button is active move to next screen without any Remote API Call.
 

**Screen2: **

Using Restful Web APIs load the list of popular Movies on this screen in a grid view with number of columns as 2.
Each Item contains the name and image. Name to be taken from the “title” and image from “poster_path” from the response.
 

For Screen 2 you will need to create a free account on https://www.themoviedb.org and use their APIs to load the list of Popular Movies.
https://developers.themoviedb.org/3/movies/get-popular-movies

## Screenshots:

### English Language

![image1](https://github.com/user-attachments/assets/03e155c4-fe98-4714-8aef-02025c12ea0e)
![image2](https://github.com/user-attachments/assets/c0dbbd78-6ee6-49f0-bc4c-4b05c7f3caa7)
![image3](https://github.com/user-attachments/assets/60a6b625-ac2f-47a4-9473-6ad04b4f4baf)
![image4](https://github.com/user-attachments/assets/172c2952-d1ce-4fa7-9522-7f5e339d127c)
![image5](https://github.com/user-attachments/assets/dd0855e1-1a3a-4248-aa80-ce93c62dae01)

### Arabic Language

![image6](https://github.com/user-attachments/assets/313f6a92-5bb4-4ba3-b78a-ae1a3eda23f0)
![image7](https://github.com/user-attachments/assets/2ad16855-cea1-4902-9563-edf009e43272)
![image8](https://github.com/user-attachments/assets/328dec9c-5362-4b2f-ba8e-8a78068e3f3e)
![image9](https://github.com/user-attachments/assets/f3847db9-fadf-41e1-bfff-47b4adf6f955)


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

Application Details:

Screen1:

Form contains two text fields: one is email and other one is password
Email must be valid email address
Password size limitation between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)
Submit button to be enabled only in case of email & password are valid otherwise it will be disabled
Once Submit button is active move to next screen without any Remote API Call.
 

Screen2: 

Using Restful Web APIs load the list of popular Movies on this screen in a grid view with number of columns as 2.
Each Item contains the name and image. Name to be taken from the “title” and image from “poster_path” from the response.
 

For Screen 2 you will need to create a free account on https://www.themoviedb.org and use their APIs to load the list of Popular Movies.

https://developers.themoviedb.org/3/movies/get-popular-movies

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
