## Application Details:

**Screen1:**

Form contains two text fields: one is email and other one is password
Email must be valid email address
Password size limitation between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)
Submit button to be enabled only in case of email & password are valid otherwise it will be disabled
Once Submit button is active move to next screen without any Remote API Call.
 

**Screen2:**

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

