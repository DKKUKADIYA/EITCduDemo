import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DestinationScreen from '../screens/DestinationScreen/DestinationScreen';
import i18n from '../i18n';
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_DESTINATION } from './routes';

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };

const MainNavigator = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={screenOptions}
                    initialRouteName={ROUTE_DESTINATION}>
                    <Stack.Screen
                        name={ROUTE_DESTINATION}
                        component={DestinationScreen}
                        options={{ gestureEnabled: false }}
                    />
                    <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} />
                    <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </I18nextProvider>
    );
};

export default MainNavigator;
