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


![image1](https://github.com/user-attachments/assets/f068ca84-6f18-41ff-9132-64a4db1e2fc3)
![image2](https://github.com/user-attachments/assets/4a1fcd2f-f20f-4102-ad1b-1f9a4aa49e66)
![image3](https://github.com/user-attachments/assets/193e99e1-1567-4d96-8f5e-a1c5308e5057)
![image4](https://github.com/user-attachments/assets/7ca318e9-a61b-44bd-b0bc-f93ccad76e0c)
![image5](https://github.com/user-attachments/assets/0510eb2a-0799-4701-b87c-20aecdfba3d8)


### Arabic Language


![image6](https://github.com/user-attachments/assets/82c30e18-fa22-4a12-b128-f3791d225aa7)
![image7](https://github.com/user-attachments/assets/1c3d5f8e-0015-486a-b48c-7259f639820f)
![image8](https://github.com/user-attachments/assets/90525538-1356-4376-8f6e-bc21fcccfffc)
![image9](https://github.com/user-attachments/assets/b79d769c-f213-440d-b4dc-0485a034292b)


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

